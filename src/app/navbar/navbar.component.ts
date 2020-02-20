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

  constructor(private router: Router,
    private route: ActivatedRoute,
    private localstorage: LocalstorageserviceService) {
    this.router.events.subscribe(() => this.routeUrl = this.router.url);
  }

  ngOnInit() {
    if (this.route.snapshot.queryParamMap.get('username')) {
      this.username = this.route.snapshot.queryParamMap.get('username');
      console.log(this.username);
    }
  }

  imageUpload(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener('load', (event: any) => {
        this.imageContainer = event.target.result;
        console.log(this.imageContainer);
        this.localstorage.store('imgData', this.imageContainer);
        this.iconShow = false;
      }, false);
      reader.readAsDataURL(event.target.files[0]);
    }
    this.localstorage.get('imgData');
  }

  logout() {
    this.localstorage.remove('userData');
    this.router.navigate(['login']);
    this.imageContainer = [];
  }
}
