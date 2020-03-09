import { LocalstorageserviceService } from './../services/localstorageservice.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate, stagger, query } from '@angular/animations';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [
    trigger('cardStagger', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger(1000, [animate('0.5s ease-in-out', style({ opacity: 1 }))])
        ], { optional: true })
      ])
    ])
  ]
})
export class HomepageComponent implements OnInit {
  moviesData: any
  username = '';

  constructor(private router: Router,
    private route: ActivatedRoute,
    private localstorage: LocalstorageserviceService,
    private db: AngularFireDatabase) {
    db.list('/movieData').valueChanges().subscribe(data => {
      this.moviesData = data;
    });
  }

  ngOnInit() {
    if (this.localstorage.get('userData')) {
      this.username = JSON.parse(this.localstorage.get('userData')).username;
    }
  }



  bookMovie(value) {
    this.router.navigate(['/bookmovie'], {
      queryParams: {
        id: value.id,
        name: value.name,
        timings: encodeURIComponent(JSON.stringify(value.timings)),
        image: value.movie_flex
      }
    });
  }

}
