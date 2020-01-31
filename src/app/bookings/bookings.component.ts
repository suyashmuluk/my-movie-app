import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  name: any;
  timing: any;
  persons: string;
  rupee: string;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.name = this.route.snapshot.queryParamMap.get('name');
    this.timing = this.route.snapshot.queryParamMap.get('time');
    this.persons = this.route.snapshot.queryParamMap.get('person');
    this.rupee = this.route.snapshot.queryParamMap.get('rupee');
  }
}
