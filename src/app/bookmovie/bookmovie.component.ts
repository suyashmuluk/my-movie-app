import { Component, OnInit } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-bookmovie',
  templateUrl: './bookmovie.component.html',
  styleUrls: ['./bookmovie.component.scss'],

})
export class BookmovieComponent implements OnInit {
  persons = 1;
  movieName = '';
  timings: any;
  movieImage: any;
  timeSelected: any;
  rupees = 250;
  img: string;



  constructor(private route: ActivatedRoute,
              private router: Router,
              private _snackBar: MatSnackBar) { }

  ngOnInit() {
      this.movieName = this.route.snapshot.queryParamMap.get('name');
      this.timings = JSON.parse(decodeURIComponent(this.route.snapshot.queryParamMap.get('timings')));
      this.timeSelected = this.timings[0];
      this.movieImage = this.route.snapshot.queryParamMap.get('image');
      this.img = localStorage.getItem('imgData');
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
    const successRef = this._snackBar.open(this.movieName + "is booked" + " for " + this.timeSelected + " for " + this.persons + " persons ", 'ok', {
      duration: 2000,
    });
    successRef.afterDismissed().subscribe(data => {
      this.router.navigate(['/bookings'], { queryParams: { name: this.movieName, time: this.timeSelected, person: this.persons, rupee: this.rupees } });
    });
  }
}
