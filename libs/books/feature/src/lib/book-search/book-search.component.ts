import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import {
  addToReadingList,
  clearSearch,
  getAllBooks,
  ReadingListBook,
  searchBooks,
  getSearchTerm,
  undoAddToReadingList
} from '@tmo/books/data-access';
import { Book } from '@tmo/shared/models';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'tmo-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookSearchComponent {
  books$: Observable<ReadingListBook[]> = this.store.select(getAllBooks);
  searchTerm$: Observable<string> = this.store.select(getSearchTerm);

  constructor(private readonly store: Store, private snackbar: MatSnackBar) {}

  onAddedBookToReadingList(book: Book) {
    this.store.dispatch(addToReadingList({ book }));

    const snackBarRef = this.snackbar.open(
      `${book.title} added to your reading list!`,
      'Undo',
      { duration: 5000 }
    );

    snackBarRef
      .onAction()
      .pipe(take(1))
      .subscribe(() => this.store.dispatch(undoAddToReadingList({ book })));
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
