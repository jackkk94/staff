import {Injectable } from '@angular/core';
import {  Observable, share, shareReplay } from 'rxjs';
import { User } from 'src/app/common/models/user.model';
import { UsersApi } from './api/users.api.service';
import { UserSearchFilter } from './models/user-search.model';
import { SearchResponse } from 'src/app/common/models/search.model';
import { CitiesApi } from './api/cities.api.service';
import { City } from 'src/app/common/models/city.model';
import { Position } from 'src/app/common/models/position.model';
import { PositionsApi } from './api/positions.api.service';
import { Store } from '@ngrx/store';
import { UsersSelectors } from './store/users.selectors';
import { LoadFiltersData, UpdateFilters } from './store/users.actions';

@Injectable()

export class UsersFacade {
  public filtersData$ = this.store.select(UsersSelectors.filtersData);
  public filtersValue$ = this.store.select(UsersSelectors.filtersValue);
  public filterByPositionsData$ = this.store.select(
    UsersSelectors.filterByPositionsData
  );

  public filterByCitiesData$ = this.store.select(
    UsersSelectors.filterByCitiesData
  );

  public filterByTitleValue$ = this.store.select(
    UsersSelectors.filterByTitleValue
  );
  public filterByPositionsValue$ = this.store.select(
    UsersSelectors.filterByPositionsValue
  );

  public skipValue$ = this.store.select(UsersSelectors.skipValue);
  public totalUsers$ = this.store.select(UsersSelectors.totalUsers);
  public users$ = this.store.select(UsersSelectors.users);

  constructor(
    private store: Store,
    private usersApi: UsersApi,
    private citiesApi: CitiesApi,
    private positionsApi: PositionsApi) {}

  public loadUsers(filter: UserSearchFilter): Observable<SearchResponse<User>> {
    return this.usersApi.getUsers(filter).pipe(shareReplay());
  }

  public loadCities(): Observable<City[]> {
    return this.citiesApi.getCities().pipe(shareReplay());
  }

  public loadPositions(): Observable<Position[]> {
    return this.positionsApi.getPositions().pipe(shareReplay());
  }




  

  public updateFilters(filters: Partial<UserSearchFilter>): void {
    this.store.dispatch(new UpdateFilters(filters));
  }

  public LoadFiltersData(): void {
    this.store.dispatch(new LoadFiltersData());
  }
}
