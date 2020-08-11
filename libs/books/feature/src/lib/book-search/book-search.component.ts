import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addToReadingList,
  clearSearch,
  getAllBooks,
  ReadingListBook,
  searchBooks,
  getSearchTerm
} from '@tmo/books/data-access';
import { Book } from '@tmo/shared/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'tmo-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookSearchComponent {
  books: Observable<ReadingListBook[]> = this.store.select(getAllBooks);
  searchTerm: Observable<string> = this.store.select(getSearchTerm);

  constructor(
    private readonly store: Store,
  ) {}

  onAddedBookToReadingList(book: Book) {
    this.store.dispatch(addToReadingList({ book }));
  }

  searchExample(searchTerm: string) {
    this.onSearchBooks(searchTerm);
  }

  onSearchBooks(searchTerm: string) {
    if (searchTerm) {
      this.store.dispatch(searchBooks({ term: searchTerm }));
    } else {
      this.store.dispatch(clearSearch());
    }
  }
}
