import { createSelector } from '@ngrx/store';
import { UsersState } from './users.reducer';
import { UserFiltersData, UserSearchFilter } from '../models/user-search.model';

interface state {
  usersState: UsersState;
}

const state = (state: state) => state.usersState;

const users = createSelector(state, (state: UsersState) => state.users);
const totalUsers = createSelector(
  state,
  (state: UsersState) => state.totalUsers
);
const isLoading = createSelector(state, (state: UsersState) => state.loading);

const filtersData = createSelector(
  state,
  (state: UsersState) => state.filtersData
);

const filtersValue = createSelector(
  state,
  (state: UsersState) => state.filtersValue
);

const filterByPositionsData = createSelector(
  filtersData,
  (state: UserFiltersData) => state.positions
);

const filterByCitiesData = createSelector(
  filtersData,
  (state: UserFiltersData) => state.cities
);

const filterByTitleValue = createSelector(
  filtersValue,
  (state: UserSearchFilter) => state.fullName
);

const filterByCitiesValue = createSelector(
  filtersValue,
  (state: UserSearchFilter) => state.city
);

const filterByPositionsValue = createSelector(
  filtersValue,
  (state: UserSearchFilter) => state.position
);

const skipValue = createSelector(
  filtersValue,
  (state: UserSearchFilter) => state.skip
);

export const UsersSelectors = {
  users,
  isLoading,
  totalUsers,
  filtersData,
  filtersValue,
  filterByPositionsData,
  filterByCitiesData,
  filterByTitleValue,
  filterByCitiesValue,
  filterByPositionsValue,
  skipValue,
};
