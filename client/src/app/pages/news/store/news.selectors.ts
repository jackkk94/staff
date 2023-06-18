import { createSelector } from '@ngrx/store';
import { NewsState } from './news.reducer';
import { NewsFiltersData, NewsSearchFilter } from '../models/news-search.model';

interface state {
  newsState: NewsState;
}

const state = (state: state) => state.newsState;

const news = createSelector(state, (state: NewsState) => state.news);
const totalNews = createSelector(state, (state: NewsState) => state.totalNews);
const isLoading = createSelector(state, (state: NewsState) => state.loading);

const filtersData = createSelector(
  state,
  (state: NewsState) => state.filtersData
);

const filtersValue = createSelector(
  state,
  (state: NewsState) => state.filtersValue
);

const filterByCategoriesData = createSelector(
  filtersData,
  (state: NewsFiltersData) => state.newCategories
);

const filterByTitleValue = createSelector(
  filtersValue,
  (state: NewsSearchFilter) => state.fullName
);
const filterByCategoriesValue = createSelector(
  filtersValue,
  (state: NewsSearchFilter) => state.newCategories
);

const skipValue = createSelector(
  filtersValue,
  (state: NewsSearchFilter) => state.skip
);

export const NewsSelectors = {
  news,
  totalNews,
  isLoading,
  filtersData,
  filtersValue,
  filterByCategoriesData,
  filterByTitleValue,
  filterByCategoriesValue,
  skipValue,
};
