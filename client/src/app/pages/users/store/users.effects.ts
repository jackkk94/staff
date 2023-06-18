import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap, withLatestFrom, forkJoin } from 'rxjs';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { CitiesApi } from '../api/cities.api.service';
import { PositionsApi } from '../api/positions.api.service';
import { UsersApi } from '../api/users.api.service';
import {
  LoadFiltersDataComplete,
  LoadUsers,
  LoadUsersComplete,
  LoadUsersError,
  UsersActionTypes,
} from './users.actions';
import { UsersSelectors } from './users.selectors';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActionTypes.LOAD_USERS),
      withLatestFrom(this.store.select(UsersSelectors.filtersValue)),
      exhaustMap(([, filters]) => {
        return this.usersApi.getUsers(filters).pipe(
          map((users) => new LoadUsersComplete(users)),
          catchError(async () => new LoadUsersError())
        );
      })
    )
  );

  updateFilters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActionTypes.UPDATE_FILTERS),
      map(() => new LoadUsers())
    )
  );

  loadFiltersData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActionTypes.LOAD_FILTERS_DATA),
      exhaustMap(() =>
        forkJoin(
          this.positionsApi.getPositions(),
          this.citiesApi.getCities()
        ).pipe(
          map(
            ([positions, cities]) =>
              new LoadFiltersDataComplete({ positions, cities })
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private usersApi: UsersApi,
    private citiesApi: CitiesApi,
    private positionsApi: PositionsApi
  ) {}
}
