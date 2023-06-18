import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap, withLatestFrom } from 'rxjs';

import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Router } from '@angular/router';
import {
  LoadFiltersDataComplete,
  LoadNews,
  LoadNewsComplete,
  LoadNewsError,
  NewsActionTypes,
} from './news.actions';
import { NewsApi } from '../api/news.api.service';
import { Store } from '@ngrx/store';
import { NewsSelectors } from './news.selectors';
import { NewCategoriesApi } from '../api/new-categories.api.service';

@Injectable()
export class NewsEffects {
  loadNews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NewsActionTypes.LOAD_NEWS),
      withLatestFrom(this.store.select(NewsSelectors.filtersValue)),
      exhaustMap(([, filters]) => {
        return this.newsApi.getNews(filters).pipe(
          map((news) => new LoadNewsComplete(news)),
          catchError(async () => new LoadNewsError())
        );
      })
    )
  );

  updateFilters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NewsActionTypes.UPDATE_FILTERS),
      map(() => new LoadNews())
    )
  );

  loadFiltersData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NewsActionTypes.LOAD_FILTERS_DATA),
      exhaustMap(() =>
        this.newCategoriesApi
          .getNewCategories()
          .pipe(
            map(
              (newCategories) => new LoadFiltersDataComplete({ newCategories })
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private newsApi: NewsApi,
    private newCategoriesApi: NewCategoriesApi  ) {}
}
