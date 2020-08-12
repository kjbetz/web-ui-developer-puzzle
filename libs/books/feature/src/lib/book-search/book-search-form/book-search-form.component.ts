import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
  OnDestroy
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  debounceTime,
  tap,
  distinctUntilChanged,
  startWith,
  takeUntil
} from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'tmo-book-search-form',
  templateUrl: './book-search-form.component.html',
  styleUrls: ['./book-search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookSearchFormComponent implements OnInit, OnDestroy {
  @Output() searchBooks = new EventEmitter<string>();
  private unsubscribe$ = new Subject<void>();

  searchForm = this.fb.group({
    term: ''
  });

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm
      .get('term')
      .valueChanges.pipe(
        startWith(''),
        debounceTime(500),
        distinctUntilChanged(),
        tap(term => this.searchBooks.emit(term)),
        takeUntil(this.unsubscribe$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
