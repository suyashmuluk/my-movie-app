import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmovieComponent } from './bookmovie.component';

describe('BookmovieComponent', () => {
  let component: BookmovieComponent;
  let fixture: ComponentFixture<BookmovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should decrease', () => {
    component.changeCount('-');
    expect(component.persons).toBe(-1);
  });
  it('should increase', () => {
    component.changeCount('+');
    expect(component.persons).toBe(1);
  })
});
