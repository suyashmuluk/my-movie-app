import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dynamic-img',
  templateUrl: './dynamic-img.component.html',
  styleUrls: ['./dynamic-img.component.scss']
})
export class DynamicImgComponent implements OnInit {

  codeGenerated:any;
  random: number;
  myNum: number = 100;
  // id = 300
  // images = [{
  //   imagesrc: ''
  // }]

  constructor(private router: Router) { }

  ngOnInit() {
    this.random = Math.floor(Math.random()*100)+1;
    console.log(this.random)
    this.router.navigate(['/img'], {queryParams:{id :this.random}});
    console.log(this.myNum);
  }

}
