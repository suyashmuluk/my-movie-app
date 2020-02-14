import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  movies = [{
    id: 'shawshank_redemption',
    name: 'Shawshank Redemption',
    timings: ['10.00AM', '11.00AM', '13.00 PM', '17.00 PM', '20.00 PM'],
    image: '/assets/Images/shawshankPage.jpeg',
  },{
    id: 'batman_superman',
    name: 'Batman vs Superman',
    timings: ['10.00AM', '11.00AM', '13.00PM'],
    image: '/assets/Images/batmanPage.jpeg'
  },{
    id: 'avengers',
    name: 'Avengers Endgame',
    timings: ['10.00AM', '11.00AM', '13.00PM', '15.00PM'],
    image: '/assets/Images/avengersPage.jpeg'
  },{
    id: 'harrypotter',
    name: 'Harry Potter',
    timings: ['7.00AM', '12.00PM', '14.00PM', '18.00PM'],
    image: '/assets/Images/harrypotterPage.jpeg'
  },{
    id: 'aquaman',
    name: 'Aquaman',
    timings: ['12.00PM', '14.00PM'],
    image: '/assets/Images/aquamanPage.jpeg'
  }]
  username =  '';

  constructor(private router: Router,
    private route: ActivatedRoute) {
    this.username = this.route.snapshot.queryParamMap.get('username');


    }

  ngOnInit() {
  }



  bookMovie(value) {
    this.router.navigate(['/bookmovie'], { queryParams: {
      id: value.id,
      name: value.name,
      timings: encodeURIComponent(JSON.stringify(value.timings)),
      image: value.image
    } });
  }

}
