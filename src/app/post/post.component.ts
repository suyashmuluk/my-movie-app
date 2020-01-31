import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  names$;
  imgWidth = 300;
  subscription: Subscription;
  constructor(private db: AngularFireDatabase) {
    this.names$ = db.list('/Name');
  }

  ngOnInit() {

  }

  zoomIn() {
    let movement;
    if(document.getElementById('imageZoom').style.transform = 'scale(movement === 0)') {
      console.log('zoom in');
      document.getElementById('imageZoom').setAttribute('style', 'transform:scale(1.7)');
    } else if(document.getElementById('imageZoom').style.transform = 'scale(movement ==> 0)') {
      console.log('zoom out');
      document.getElementById('imageZoom').setAttribute('style','transform:scale(0)');
    }
  }

  zoomOut(){

  }



}
