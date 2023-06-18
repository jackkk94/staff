import { Injectable } from '@angular/core';
import { Observable, of, shareReplay, tap } from 'rxjs';
import { Router } from '@angular/router';
import { User } from 'src/app/common/models/user.model';
import { LoginRequest, LoginResponse } from 'src/app/common/models/auth.model';
import { AuthApi } from 'src/app/pages/login/api/auth.api.service';
import { UsersApi } from 'src/app/pages/users/api/users.api.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { AuthState } from 'src/app/common/store/auth/auth.reducer';
import { Store } from '@ngrx/store';
import { AuthSlectors } from 'src/app/common/store/auth/auth.selectors';
import { Login, LoginComplete } from 'src/app/common/store/auth/auth.actions';

export const AUTH_KEY = 'staff:user';
@Injectable({
  providedIn: 'root',
})
export class AuthFacade {  
  public isAuthenticated$ = this.store.select(AuthSlectors.IsloggedIn)
  public token$ = this.store.select(AuthSlectors.UserToken);
  public userId$ = this.store.select(AuthSlectors.UserId)
  public currentUser$ = this.store.select(AuthSlectors.CurrentUser)

  public token:string;

  constructor(
    private store: Store,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.initData();
  }

  public login(form: LoginRequest): void{
    this.store.dispatch(new Login(form))
  }

  public initData(): void {
    const info = this.localStorageService.getData(AUTH_KEY);
    if (!info) {
      this.router.navigate(['/login']);
      return;
    }

    const userMeta = JSON.parse(
      this.localStorageService.getData(AUTH_KEY)
    );

    this.token = userMeta.token;

    this.store.dispatch(new LoginComplete(userMeta))
  }
}
