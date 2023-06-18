import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap, withLatestFrom } from 'rxjs';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NewCategoriesApi } from '../../news/api/new-categories.api.service';
import { NewsApi } from '../../news/api/news.api.service';
import {
  CreateNewComplete,
  LoadDataSourcesComplete,
  LoadNewComplete,
  LoadNewError,
  NewActionTypes,
  UpdateNewComplete,
} from './new.actions';
import { NewRequest } from '../models/new.model';
import { NewSelectors } from './new.selectors';

@Injectable()
export class NewEffects {
  loadNew$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NewActionTypes.LOAD_NEW),
      exhaustMap(({ payload }) => {
        return this.newsApi.getNewById(payload).pipe(
          map((result) => new LoadNewComplete(result)),
          catchError(async () => {
            this.router.navigate(['company-news']);
            return new LoadNewError()
          })
        );
      })
    )
  );

  loadDataSourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NewActionTypes.LOAD_DATASOURCES),
      exhaustMap(() => {
        return this.newCategoriesApi
          .getNewCategories()
          .pipe(
            map((categories) => new LoadDataSourcesComplete({ categories }))
          );
      })
    )
  );

  createNew$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NewActionTypes.CREATE_NEW),
      exhaustMap(({ payload }) => {
        return this.newsApi
          .createNew(payload)
          .pipe(map((result) => {
            this.router.navigate(['/company-news', result.id]);
            return new CreateNewComplete(result)
          }));
      })
    )
  );

  cancel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NewActionTypes.CANCEL_UPDATE),
      withLatestFrom(this.store.select(NewSelectors.initialValue)),
      map(([, initialVAlue]) => new LoadNewComplete(initialVAlue))
    )
  );

  updateNew$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NewActionTypes.UPDATE_NEW),
      exhaustMap(({ payload }) => {
        const { id, data } = payload as { id: string; data: NewRequest };
        return this.newsApi
          .updateNewById(id, data)
          .pipe(map((result) => new UpdateNewComplete(result)));
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private newsApi: NewsApi,
    private newCategoriesApi: NewCategoriesApi,
    private router: Router
  ) {}
}
