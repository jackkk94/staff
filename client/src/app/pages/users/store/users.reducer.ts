import { DEFAULT_PAGE_SIZE } from 'src/app/shared/components/pagination/pagination.component';
import { User } from 'src/app/common/models/user.model';
import { UsersActionTypes, UsersActions } from './users.actions';
import { UserFiltersData, UserSearchFilter } from '../models/user-search.model';

export interface UsersState {
  users: User[];
  totalUsers: number;
  loading: boolean;
  filtersValue: UserSearchFilter;
  filtersData: UserFiltersData;
}

export const DEFAULT_USERS_FILTERS_VALUE = {
  fullName: '',
  city: [],
  position: [],
  take: DEFAULT_PAGE_SIZE,
  skip: 0,
} as UserSearchFilter;

export const DEFAULT_USERS_FILTERS_DATA = {
  cities: [],
  positions: [],
} as UserFiltersData;

const initialState = {
  users: [],
  totalUsers: 0,
  loading: false,
  filtersValue: DEFAULT_USERS_FILTERS_VALUE,
  filtersData: DEFAULT_USERS_FILTERS_DATA,
};

export function UsersReducer(
  state = initialState,
  action: UsersActions
): UsersState {
  switch (action.type) {
    case UsersActionTypes.LOAD_USERS:
      return {
        ...state,
        loading: true,
      };
    case UsersActionTypes.LOAD_USERS_COMPLETE:
      return {
        ...state,
        loading: false,
        users: action.payload?.result ?? [],
        totalUsers: action.payload?.total ?? 0,
      };
    case UsersActionTypes.UPDATE_FILTERS:
      return {
        ...state,
        filtersValue: { ...state.filtersValue, ...action.payload },
      };

    case UsersActionTypes.LOAD_FILTERS_DATA_COMPLETE:
      return {
        ...state,
        filtersData: { ...state.filtersData, ...action.payload },
      };

    default:
      return state;
  }
}
