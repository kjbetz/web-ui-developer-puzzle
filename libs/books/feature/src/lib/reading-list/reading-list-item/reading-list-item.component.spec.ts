import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingListItemComponent } from './reading-list-item.component';
import { SharedTestingModule } from '@tmo/shared/testing';
import { BooksFeatureModule } from '../../books-feature.module';

describe('ReadingListItemComponent', () => {
  let component: ReadingListItemComponent;
  let fixture: ComponentFixture<ReadingListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule, SharedTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
