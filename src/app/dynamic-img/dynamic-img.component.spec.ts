import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicImgComponent } from './dynamic-img.component';

describe('DynamicImgComponent', () => {
  let component: DynamicImgComponent;
  let fixture: ComponentFixture<DynamicImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
