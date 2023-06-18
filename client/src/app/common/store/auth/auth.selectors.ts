import { createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';
import { LoginResponse } from '../../models/auth.model';

interface state {
  authState: AuthState;
}

const state = (state: state) => state.authState;

const CurrentUser = createSelector(state, (state: AuthState) => state.user);
const IsloggedIn = createSelector(
  state,
  (state1: AuthState) => state1.loggedIn
);
const AuthIsFailed = createSelector(
  state,
  (state: AuthState) => state.hasError
);
const UserMeta = createSelector(state, (state: AuthState) => state.userMeta);

const UserToken = createSelector(
  UserMeta,
  (state: LoginResponse) => state.token
);

const UserId = createSelector(UserMeta, (state: LoginResponse) => state.id);

export const AuthSlectors = {
  CurrentUser,
  IsloggedIn,
  AuthIsFailed,
  UserToken,
  UserId,
};
