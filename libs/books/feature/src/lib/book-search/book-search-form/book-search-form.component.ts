import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'tmo-book-search-form',
  templateUrl: './book-search-form.component.html',
  styleUrls: ['./book-search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookSearchFormComponent implements OnInit {
  @Output() searchBooks = new EventEmitter<string>();
  searchForm = this.fb.group({
    term: ''
  });

  constructor(private readonly fb: FormBuilder) { }

  get searchTerm(): string {
    return this.searchForm.value.term;
  }

  ngOnInit(): void {
  }

  search() {
    this.searchBooks.emit(this.searchTerm);
  }
}
