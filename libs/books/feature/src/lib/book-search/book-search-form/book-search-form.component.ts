import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
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

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.search();
  }

  search() {
    const searchTerm = this.searchForm.get('term');
    searchTerm.valueChanges.forEach((term: string) =>
      this.searchBooks.emit(term)
    );
  }
}
