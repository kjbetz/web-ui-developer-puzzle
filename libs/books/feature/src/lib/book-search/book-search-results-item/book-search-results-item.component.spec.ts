import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchResultsItemComponent } from './book-search-results-item.component';

describe('BookSearchResultsItemComponent', () => {
  let component: BookSearchResultsItemComponent;
  let fixture: ComponentFixture<BookSearchResultsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSearchResultsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchResultsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
