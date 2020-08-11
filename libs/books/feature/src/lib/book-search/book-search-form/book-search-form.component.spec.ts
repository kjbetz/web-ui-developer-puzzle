import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchFormComponent } from './book-search-form.component';
import { BooksFeatureModule } from '../../books-feature.module';
import { SharedTestingModule } from '@tmo/shared/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('BookSearchFormComponent', () => {
  let component: BookSearchFormComponent;
  let fixture: ComponentFixture<BookSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule, NoopAnimationsModule, SharedTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
