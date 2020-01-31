import { Component, OnInit } from '@angular/core';
import { NgxImageZoomModule } from 'ngx-image-zoom';

@Component({
  selector: 'app-sass-demo',
  templateUrl: './sass-demo.component.html',
  styleUrls: ['./sass-demo.component.scss']
})
export class SassDemoComponent implements OnInit {
  width: number;
  height: number;
  zoomin: any;
  myThumbnail = '/assets/Images/aquaman.jpeg';
  myFullresImage = '/assets/Images/aquaman.jpeg';
  constructor() { }

  ngOnInit() {
  }

  event: MouseEvent;
    clientX = 0;
    clientY = 0;

    onEvent(event: MouseEvent): void {
        this.event = event;
    }

    coordinates(event: MouseEvent): void {
        this.clientX = event.clientX;
        this.clientY = event.clientY;
    }
    zoomIn() {
      this.width = this.clientX;
      this.height = this.clientY;
      this.zoomin = (this.width + 100) + "px";
      document.getElementById('img').setAttribute('style', 'transform: scale(2)');
    }
    zoomOut() {
      this.width = this.clientX;
      this.height = this.clientY;
      this.zoomin = (this.width - 100) + "px";
    }

}
