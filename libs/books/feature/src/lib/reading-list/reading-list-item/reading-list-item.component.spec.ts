import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingListItemComponent } from './reading-list-item.component';

describe('ReadingListItemComponent', () => {
  let component: ReadingListItemComponent;
  let fixture: ComponentFixture<ReadingListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingListItemComponent ]
    })
    .compileComponents();
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
