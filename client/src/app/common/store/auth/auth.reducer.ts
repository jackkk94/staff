import { LoginResponse } from '../../models/auth.model';
import { User } from '../../models/user.model';
import { AuthActionTypes, AuthActions } from './auth.actions';

export interface AuthState {
  userMeta: LoginResponse;
  user: User;
  loggedIn: boolean;
  hasError: boolean;
}

const initialState = {
  user: null,
  userMeta: null,
  loggedIn: false,
  hasError: false,
};

export function AuthReducer(
  state = initialState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        hasError: false,
      };
    case AuthActionTypes.LOGIN_COMPLETE:
      return {
        ...state,
        loggedIn: true,
        userMeta: action.payload,
        user: action.payload.user,
      };
    case AuthActionTypes.LOGIN_ERROR:
      return {
        ...state,
        hasError: true,
      };

    case AuthActionTypes.LOAD_USER_BY_ID:
      return {
        ...state,
        loggedIn: true,
        hasError: false,
      };

    case AuthActionTypes.LOAD_USER_BY_ID_COMPLETE:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
