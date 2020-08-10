import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchFormComponent } from './book-search-form.component';

describe('BookSearchFormComponent', () => {
  let component: BookSearchFormComponent;
  let fixture: ComponentFixture<BookSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
