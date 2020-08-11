import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchResultsItemComponent } from './book-search-results-item.component';
import { SharedTestingModule } from '@tmo/shared/testing';
import { BooksFeatureModule } from '../../books-feature.module';
import { ReadingListBook } from '@tmo/books/data-access';

describe('BookSearchResultsItemComponent', () => {
  let component: BookSearchResultsItemComponent;
  let fixture: ComponentFixture<BookSearchResultsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule, SharedTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchResultsItemComponent);
    component = fixture.componentInstance;

    const book: ReadingListBook = {
      id: '1',
      title: 'My Book',
      authors: ['Author, First', 'Author, Second'],
      description: 'This is my test book',
      isAdded: false
     };

    component.book = book;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
