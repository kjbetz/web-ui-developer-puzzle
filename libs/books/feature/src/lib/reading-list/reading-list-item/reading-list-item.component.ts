import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ReadingListItem } from '@tmo/shared/models';

@Component({
  selector: 'tmo-reading-list-item',
  templateUrl: './reading-list-item.component.html',
  styleUrls: ['./reading-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadingListItemComponent {
  @Input() book: ReadingListItem;
  @Output() removedFromReadingList = new EventEmitter<ReadingListItem>();

  removeFromReadingList(book: ReadingListItem) {
    this.removedFromReadingList.emit(book);
  }
}
