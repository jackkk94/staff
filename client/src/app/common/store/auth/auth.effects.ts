import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, tap, exhaustMap } from 'rxjs';
import {
  AuthActionTypes,
  LoginComplete,
  LoginError,
} from './auth.actions';
import { Injectable } from '@angular/core';
import { AuthApi } from 'src/app/pages/login/api/auth.api.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Router } from '@angular/router';
import { AUTH_KEY } from 'src/app/modules/core/services/auth.facade.sevice';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.LOGIN),
      exhaustMap(({ payload }) =>
        this.authApi.login(payload).pipe(
          tap((userMeta) => {
            this.localStorageService.setData(AUTH_KEY, userMeta);
            this.router.navigate(['/']);
          }),
          map((userMeta) => new LoginComplete(userMeta)),
          catchError(async () => new LoginError())
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authApi: AuthApi,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {}
}
