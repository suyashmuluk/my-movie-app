import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('fade_in_out', [
      state('close', style({
        height: '0px',
        opacity: '0',
        overflow: 'hidden',
      })),
      transition('close => *', [
        animate('500ms ease-out', style({
          height: '200px',
          width: '200px',
          opacity: 1,
          transform: 'rotate(360deg)'
        }))
      ]),
      transition('* => close', [
        animate('500ms ease-in', style({
          height: 0,
          opacity: 0,
          transform: 'rotate(-360deg)'
        }))
      ])
    ])
  ]
})
export class AnimationComponent implements OnInit {

  isopen = false;

  constructor() { }

  ngOnInit() {
  }

  openBox() {
    this.isopen = !this.isopen;
  }

}
