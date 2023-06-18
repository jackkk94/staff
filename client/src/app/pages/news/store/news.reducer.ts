import { DEFAULT_PAGE_SIZE } from 'src/app/shared/components/pagination/pagination.component';
import { New } from '../../new/models/new.model';
import { NewsFiltersData, NewsSearchFilter } from '../models/news-search.model';
import { NewsActionTypes, NewsActions } from './news.actions';

export interface NewsState {
  news: New[];
  totalNews: number;
  loading: boolean;
  filtersValue: NewsSearchFilter;
  filtersData: NewsFiltersData;
}

export const DEFAULT_NEWS_FILTERS_VALUE = {
  fullName: '',
  newCategories: [],
  take: DEFAULT_PAGE_SIZE,
  skip: 0,
} as NewsSearchFilter;

export const DEFAULT_NEWS_FILTERS_DATA = {
  newCategories: [],
} as NewsFiltersData;

const initialState = {
  news: [],
  loading: false,
  filtersValue: DEFAULT_NEWS_FILTERS_VALUE,
  filtersData: DEFAULT_NEWS_FILTERS_DATA,
  totalNews: 0,
};

export function NewsReducer(
  state = initialState,
  action: NewsActions
): NewsState {
  switch (action.type) {
    case NewsActionTypes.LOAD_NEWS:
      return {
        ...state,
        loading: true,
      };
    case NewsActionTypes.LOAD_NEWS_COMPLETE:
      return {
        ...state,
        loading: false,
        news: action.payload?.result ?? [],
        totalNews: action.payload?.total ?? 0,
      };
    case NewsActionTypes.UPDATE_FILTERS:
      return {
        ...state,
        filtersValue: { ...state.filtersValue, ...action.payload },
      };

    case NewsActionTypes.LOAD_FILTERS_DATA_COMPLETE:
      return {
        ...state,
        filtersData: { ...state.filtersData, ...action.payload },
      };

    default:
      return state;
  }
}
