import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormarrayEgComponent } from './formarray-eg.component';

describe('FormarrayEgComponent', () => {
  let component: FormarrayEgComponent;
  let fixture: ComponentFixture<FormarrayEgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormarrayEgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormarrayEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
