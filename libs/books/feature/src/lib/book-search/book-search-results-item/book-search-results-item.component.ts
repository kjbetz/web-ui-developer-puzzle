import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ReadingListBook } from '@tmo/books/data-access';

@Component({
  selector: 'tmo-book-search-results-item',
  templateUrl: './book-search-results-item.component.html',
  styleUrls: ['./book-search-results-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookSearchResultsItemComponent implements OnInit {
  @Input() book: ReadingListBook;
  @Output() addedBookToReadingList = new EventEmitter<ReadingListBook>();

  constructor() { }

  ngOnInit(): void {
  }

  formatDate(date: void | string) {
    return date
      ? new Intl.DateTimeFormat('en-US').format(new Date(date))
      : undefined;
  }

  addBookToReadingList(book: ReadingListBook) {
    this.addedBookToReadingList.emit(book);
  }
}
