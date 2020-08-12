import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import {
  getReadingList,
  removeFromReadingList,
  undoRemoveFromReadingList
} from '@tmo/books/data-access';
import { take } from 'rxjs/operators';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  constructor(private readonly store: Store, private snackbar: MatSnackBar) {}

  onRemovedFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));

    const snackBarRef = this.snackbar.open(
      `${item.title} removed from your reading list!`,
      'Undo',
      { duration: 5000 }
    );

    snackBarRef
      .onAction()
      .pipe(take(1))
      .subscribe(() =>
        this.store.dispatch(undoRemoveFromReadingList({ item }))
      );
  }
}
