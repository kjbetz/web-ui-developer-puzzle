import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchResultsComponent } from './book-search-results.component';
import { BooksFeatureModule } from '../../books-feature.module';
import { SharedTestingModule } from '@tmo/shared/testing';

describe('BookSearchResultsComponent', () => {
  let component: BookSearchResultsComponent;
  let fixture: ComponentFixture<BookSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule, SharedTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
