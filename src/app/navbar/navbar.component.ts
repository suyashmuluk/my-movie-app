import { DialogComponent } from './../dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { LocalstorageserviceService } from './../services/localstorageservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { trigger, state, style, transition, animate, group } from '@angular/animations'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        transform: 'translateX(-1000px)'
      })),
      transition('collapsed => expanded', [
        animate('500ms cubic-bezier(.38,.38,.65,.64)', style({
          transform: 'translateX(0px)'
        }))
      ]),
      transition('expanded => collapsed', [
        group([
          animate('400ms cubic-bezier(.38,.38,.65,.64)', style({
            opacity: 0,
          })),
          animate('400ms cubic-bezier(.38,.38,.65,.64)', style({
            transform: 'translateX(-1000px)'
          }))
        ])
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {

  username = '';
  myfile: string;
  imageContainer = [];
  fileToUpload: File = null;
  iconShow = true;
  routeUrl: string;
  isLoggedIn: any;
  mobileMenuItems = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private localstorage: LocalstorageserviceService,
    private http: HttpClientModule,
    private dialog: MatDialog) {
    this.router.events.subscribe(() => this.routeUrl = this.router.url);
  }

  ngOnInit() {
    if (JSON.parse(this.localstorage.get('userData')) === null || JSON.parse(this.localstorage.get('userData')) === undefined || JSON.parse(this.localstorage.get('userData')) === '') {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
    }

    this.getUername();
  }

  getUername() {
    if (JSON.parse(this.localstorage.get('userData')).username) {
      this.username = JSON.parse(this.localstorage.get('userData')).username;
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

  manageAccount() {
    const dialogRfr = this.dialog.open(DialogComponent, {
      width: '75%',
    });
    dialogRfr.afterClosed().subscribe(result => {
      console.log('closed');
    });
  }

  logout() {
    this.localstorage.remove('userData');
    this.localstorage.remove('movieData');
    this.localstorage.remove('imgData');
    this.router.navigate(['home']);
    this.isLoggedIn = false;
  }

  openMobileMenuItems() {
    this.mobileMenuItems = !this.mobileMenuItems
  }
}
