import { Action } from '@ngrx/store';
import { NewsFiltersData, NewsSearchFilter } from '../models/news-search.model';
import { SearchResponse } from 'src/app/common/models/search.model';
import { New } from '../../new/models/new.model';

export enum NewsActionTypes {
  LOAD_NEWS = '[NEWS] LOAD_NEWS',
  LOAD_NEWS_COMPLETE = '[NEWS] LOAD_NEWS_COMPLETE',
  LOAD_FILTERS_DATA = '[NEWS] LOAD_FILTERS_DATA',
  LOAD_FILTERS_DATA_COMPLETE = '[NEWS] LOAD_FILTERS_DATA_COMPLETE',
  LOAD_NEWS_ERROR = '[NEWS] LOAD_NEWS_ERROR',
  UPDATE_FILTERS = '[NEWS] UPDATE_FILTERS',
}

export class LoadNews implements Action {
  readonly type = NewsActionTypes.LOAD_NEWS;
}

export class LoadNewsComplete implements Action {
  readonly type = NewsActionTypes.LOAD_NEWS_COMPLETE;
  constructor(public payload: SearchResponse<New>) {}
}

export class LoadNewsError implements Action {
  readonly type = NewsActionTypes.LOAD_NEWS_ERROR;
}

export class LoadFiltersData implements Action {
  readonly type = NewsActionTypes.LOAD_FILTERS_DATA;
}

export class LoadFiltersDataComplete implements Action {
  readonly type = NewsActionTypes.LOAD_FILTERS_DATA_COMPLETE;
  constructor(public payload: NewsFiltersData) {}
}

export class UpdateFilters implements Action {
  readonly type = NewsActionTypes.UPDATE_FILTERS;
  constructor(public payload: Partial<NewsSearchFilter>) {}
}

export type NewsActions =
  | LoadNews
  | LoadFiltersDataComplete
  | LoadNewsComplete
  | LoadNewsError
  | UpdateFilters;
