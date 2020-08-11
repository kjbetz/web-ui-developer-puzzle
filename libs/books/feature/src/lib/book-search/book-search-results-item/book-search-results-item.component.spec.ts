import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchResultsItemComponent } from './book-search-results-item.component';
import { SharedTestingModule } from '@tmo/shared/testing';
import { BooksFeatureModule } from '../../books-feature.module';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
