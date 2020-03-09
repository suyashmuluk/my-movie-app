import { LocalstorageserviceService } from './../services/localstorageservice.service';
import { Component, OnInit } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-bookmovie',
  templateUrl: './bookmovie.component.html',
  styleUrls: ['./bookmovie.component.scss'],

})
export class BookmovieComponent implements OnInit {
  persons = 1;
  movieName = '';
  timings: any;
  timeSelected: any;
  rupees = 250;
  img: string;



  constructor(private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private localstorage: LocalstorageserviceService) { }

  ngOnInit() {
    this.movieName = this.route.snapshot.queryParamMap.get('name');
    this.timings = JSON.parse(decodeURIComponent(this.route.snapshot.queryParamMap.get('timings')));
    this.timeSelected = this.timings[0];
    this.img = this.route.snapshot.queryParamMap.get('image');
  }

  changeCount(op) {
    if (op === '-') {
      if (this.persons > 1) {
        console.log('increase')
        this.persons -= 1;
        this.rupees -= 250;
      }
    } else if (op === '+') {
      this.persons += 1;
      this.rupees += 250;
    }
  }

  timeselect(time, i) {
    this.timeSelected = time;
  }

  bookMovie(value) {
    this.localstorage.get('userData');
    if (this.localstorage.get('userData') === null) {
      const successRef = this.snackBar.open("We couldn't identify you. Please sign up.", "OK", {
        duration: 2000,
      })
      this.router.navigate(['signup']);
    } else {
      // tslint:disable-next-line: max-line-length
      const successRef = this.snackBar.open(this.movieName + 'is booked' + ' for ' + this.timeSelected + ' for ' + this.persons + ' persons ', 'OK', {
        duration: 2000,
      });
      successRef.afterDismissed().subscribe(data => {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/bookings'], { queryParams: { name: this.movieName, time: this.timeSelected, person: this.persons, rupee: this.rupees } });
      });
      const movieData = {
        moviename: this.movieName,
        movietime: this.timeSelected,
        persons: this.persons,
        rupee: this.rupees
      }
      this.localstorage.store('movieData', movieData);
    }
  }
}
