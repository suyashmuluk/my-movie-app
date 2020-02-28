import { HttpClientModule } from '@angular/common/http';
import { LocalstorageserviceService } from './../services/localstorageservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  username = '';
  myfile: string;
  imageContainer = [];
  fileToUpload: File = null;
  iconShow = true;
  routeUrl: string;

  isLoggedIn = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private localstorage: LocalstorageserviceService,
              private http: HttpClientModule) {
    this.router.events.subscribe(() => this.routeUrl = this.router.url);
  }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    if (JSON.parse(this.localstorage.get('userData')) === null || JSON.parse(this.localstorage.get('userData')) === undefined || JSON.parse(this.localstorage.get('userData')) === '') {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
    }
  }

  imageUpload(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener('load', (event: any) => {
        this.imageContainer = event.target.result;
        this.localstorage.store('imgData', this.imageContainer);
        this.iconShow = false;
      }, false);
      reader.readAsDataURL(event.target.files[0]);
    }
    this.localstorage.get('imgData');
  }

  logout() {
    this.localstorage.remove('userData');
    this.localstorage.remove('movieData');
    this.localstorage.remove('imgData');
    this.router.navigate(['home']);
    this.isLoggedIn = false;
  }
}
