import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formarray-eg',
  templateUrl: './formarray-eg.component.html',
  styleUrls: ['./formarray-eg.component.scss'],
  animations: [
    trigger('fade_in_out',[
      transition(':enter', [
        animate('0.5s cubic-bezier(.65,0,.49,.92)'),
        style({
          transform: 'translateY(-10px)'
        })
      ]),
      transition(':leave', [
        animate('0.4s cubic-bezier(1,-0.32,.3,1.08)',
        style({
          transform: 'translate(-100%)'
        }))
      ]),
    ])
  ]
})
export class FormarrayEgComponent implements OnInit {
  message = '';


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.form)
  }

  form = new FormGroup({
    topics: new FormArray([])
  });

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  addTopic(topic) {
    if (topic.value === '') {
      alert('please enter value')
    } else {
      this.topics.push(new FormControl(topic.value));
      topic.value = '';
    }

  }

  removeTopic(topic) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }





  // clickMe(){
  //   this.message = 'code run successfully'
  // }

}
