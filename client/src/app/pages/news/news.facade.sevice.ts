import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { SearchResponse } from 'src/app/common/models/search.model';
import { NewsApi } from './api/news.api.service';
import { NewsFiltersData, NewsSearchFilter } from './models/news-search.model';
import { NewRequest, New } from '../new/models/new.model';

import { NewCategory } from '../new/models/new-category.model';
import { NewCategoriesApi } from './api/new-categories.api.service';
import { Store } from '@ngrx/store';
import { LoadFiltersData, LoadNews, UpdateFilters } from './store/news.actions';
import { Guid } from 'guid-typescript';
import { NewsSelectors } from './store/news.selectors';

@Injectable()
export class NewsFacade {
  public filtersData$ = this.store.select(NewsSelectors.filtersData);
  public filtersValue$ = this.store.select(NewsSelectors.filtersValue);
  public filterByCategoriesData$ = this.store.select(
    NewsSelectors.filterByCategoriesData
  );
  public filterByTitleValue$ = this.store.select(
    NewsSelectors.filterByTitleValue
  );
  public filterByCategoriesValue$ = this.store.select(
    NewsSelectors.filterByCategoriesValue
  );
  public skipValue$ = this.store.select(NewsSelectors.skipValue);
  public totalNews$ = this.store.select(NewsSelectors.totalNews);
  public news$ = this.store.select(NewsSelectors.news);

  constructor(
    private store: Store,
  ) {}

  public updateFilters(filters: Partial<NewsSearchFilter>): void {
    this.store.dispatch(new UpdateFilters(filters));
  }

  public LoadFiltersData(): void {
    this.store.dispatch(new LoadFiltersData());
  }
}
