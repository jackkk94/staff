import { Action } from '@ngrx/store';
import { LoginRequest, LoginResponse } from '../../models/auth.model';
import { User } from '../../models/user.model';

export enum AuthActionTypes {
  LOGIN = '[Auth] LOGIN',
  LOGIN_COMPLETE = '[Auth] LOGIN_COMPLETE',
  LOGIN_ERROR = '[Auth] LOGIN_ERROR',
  LOAD_USER_BY_ID = '[Auth] LOAD_USER_BY_ID',
  LOAD_USER_BY_ID_COMPLETE = '[Auth] LOAD_USER_BY_ID_COMPLETE',
  INIT_USER_DATA = '[Auth] INIT_USER_DATA',
}

export class Login implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: LoginRequest) {}
}

export class InitUserData implements Action {
  readonly type = AuthActionTypes.INIT_USER_DATA;
}

export class LoginComplete implements Action {
  readonly type = AuthActionTypes.LOGIN_COMPLETE;
  constructor(public payload: LoginResponse) {}
}

export class LoginError implements Action {
  readonly type = AuthActionTypes.LOGIN_ERROR;
}

export class LoadUser implements Action {
  readonly type = AuthActionTypes.LOAD_USER_BY_ID;
  constructor(public payload: string) {}
}

export class LoadUserComplete implements Action {
  readonly type = AuthActionTypes.LOAD_USER_BY_ID_COMPLETE;
  constructor(public payload: User) {}
}

export type AuthActions =
  | Login
  | LoginComplete
  | LoginError
  | LoadUser
  | LoadUserComplete
  | InitUserData;
