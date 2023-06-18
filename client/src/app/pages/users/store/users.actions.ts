import { Action } from '@ngrx/store';
import { SearchResponse } from 'src/app/common/models/search.model';
import { User } from 'src/app/common/models/user.model';
import { UserFiltersData, UserSearchFilter } from '../models/user-search.model';

export enum UsersActionTypes {
  LOAD_USERS = '[USERS] LOAD_USERS',
  LOAD_USERS_COMPLETE = '[USERS] LOAD_USERS_COMPLETE',
  LOAD_FILTERS_DATA = '[USERS] LOAD_FILTERS_DATA',
  LOAD_FILTERS_DATA_COMPLETE = '[USERS] LOAD_FILTERS_DATA_COMPLETE',
  LOAD_USERS_ERROR = '[USERS] LOAD_USERS_ERROR',
  UPDATE_FILTERS = '[USERS] UPDATE_FILTERS',
}

export class LoadUsers implements Action {
  readonly type = UsersActionTypes.LOAD_USERS;
}

export class LoadUsersComplete implements Action {
  readonly type = UsersActionTypes.LOAD_USERS_COMPLETE;
  constructor(public payload: SearchResponse<User>) {}
}

export class LoadUsersError implements Action {
  readonly type = UsersActionTypes.LOAD_USERS_ERROR;
}

export class LoadFiltersData implements Action {
  readonly type = UsersActionTypes.LOAD_FILTERS_DATA;
}

export class LoadFiltersDataComplete implements Action {
  readonly type = UsersActionTypes.LOAD_FILTERS_DATA_COMPLETE;
  constructor(public payload: UserFiltersData) {}
}

export class UpdateFilters implements Action {
  readonly type = UsersActionTypes.UPDATE_FILTERS;
  constructor(public payload: Partial<UserSearchFilter>) {}
}

export type UsersActions =
  | LoadUsers
  | LoadUsersComplete
  | LoadUsersError
  | LoadFiltersData
  | LoadFiltersDataComplete
  | UpdateFilters;
