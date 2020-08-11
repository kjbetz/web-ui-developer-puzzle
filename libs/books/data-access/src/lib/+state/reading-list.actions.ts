import { createAction, props } from '@ngrx/store';
import { Book, ReadingListItem } from '@tmo/shared/models';

export const loadReadingList = createAction('[Reading List] Load list');

export const loadReadingListSuccess = createAction(
  '[Reading List] Load list success',
  props<{ list: ReadingListItem[] }>()
);
export const loadReadingListError = createAction(
  '[Reading List] Load list error',
  props<{ error: string }>()
);

export const addToReadingList = createAction(
  '[Reading List] Add to list',
  props<{ book: Book }>()
);

export const failedAddToReadingList = createAction(
  '[Reading List] Failed add to list',
  props<{ book: Book }>()
);

export const confirmedAddToReadingList = createAction(
  '[Reading List] Confirmed add to list',
  props<{ book: Book }>()
);

export const toggleMarkedAsRead = createAction(
  '[Reading List] Mark as read',
  props<{ item: ReadingListItem }>()
);

export const failedToggleMarkedAsRead = createAction(
  '[Reading List] Failed mark as read',
  props<{ item: ReadingListItem }>()
);

export const undoToggledMarkedAsRead = createAction(
  'Reading List] Undo toggled marked as read',
  props<{ item: ReadingListItem }>()
);

export const confirmedMarkedAsRead = createAction(
  '[Reading List] Confirmed mark as read',
  props<{ item: ReadingListItem }>()
);
export const removeFromReadingList = createAction(
  '[Reading List] Remove from list',
  props<{ item: ReadingListItem }>()
);

export const failedRemoveFromReadingList = createAction(
  '[Reading List] Failed remove from list',
  props<{ item: ReadingListItem }>()
);

export const confirmedRemoveFromReadingList = createAction(
  '[Reading List] Confirmed remove from list',
  props<{ item: ReadingListItem }>()
);
