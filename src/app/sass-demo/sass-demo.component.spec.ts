import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SassDemoComponent } from './sass-demo.component';

describe('SassDemoComponent', () => {
  let component: SassDemoComponent;
  let fixture: ComponentFixture<SassDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SassDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SassDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
