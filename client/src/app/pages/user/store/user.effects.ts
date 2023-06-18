import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, tap, exhaustMap, of, withLatestFrom } from 'rxjs';

import { Injectable } from '@angular/core';
import { AuthApi } from 'src/app/pages/login/api/auth.api.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NewCategoriesApi } from '../../news/api/new-categories.api.service';
import { NewsApi } from '../../news/api/news.api.service';
import {
  LoadProjectTeamComplete,
  LoadUserComplete,
  LoadUserError,
  UpdateUserComplete,
  UserActionTypes,
} from './user.actions';
import { UsersApi } from '../../users/api/users.api.service';
import { ProjectsApi } from '../api/projects.api.service';
import { UserUpdateRequest } from '../components/user/models/user.model';
import { UserSelectors } from './user.selectors';

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.LOAD_USER),
      exhaustMap(({ payload }) => {
        return this.usersApi.getUserById(payload).pipe(
          map((result) => new LoadUserComplete(result)),
          catchError(async () => {
            this.router.navigate(['/employees']);
            return new LoadUserError();
          })
        );
      })
    )
  );

  loadTeam$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.LOAD_PROJECT_TEAM),
      exhaustMap(({ payload }) => {
        return this.projectsApi
          .getProjectById(payload)
          .pipe(map((result) => new LoadProjectTeamComplete(result)));
      })
    )
  );

  cancel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.CANCEL_UPDATE),
      withLatestFrom(this.store.select(UserSelectors.initialValue)),
      map(([, initialVAlue]) => new LoadUserComplete(initialVAlue))
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.UPDATE_USER),
      exhaustMap(({ payload }) => {
        const { id, data } = payload as { id: string; data: UserUpdateRequest };
        return this.usersApi
          .updateUserById(id, data)
          .pipe(map((result) => new UpdateUserComplete(result)));
      })
    )
  );

  constructor(
    private actions$: Actions,
    private usersApi: UsersApi,
    private store: Store,
    private projectsApi: ProjectsApi,
    private router: Router
  ) {}
}
