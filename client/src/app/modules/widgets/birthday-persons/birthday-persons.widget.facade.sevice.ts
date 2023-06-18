import { Injectable, Input } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { DateRange, SortSettings } from 'src/app/common/models/search.model';
import { User } from 'src/app/common/models/user.model';
import { UsersApi } from 'src/app/pages/users/api/users.api.service';
import { UserSearchFilter } from 'src/app/pages/users/models/user-search.model';

@Injectable()
export class BirthdayPersonsWidgetFacade {
  constructor(private usersApi: UsersApi) {}

  public loadEmployees(): Observable<User[]> {
    const filter = { birthday: new Date() } as UserSearchFilter;
    return this.usersApi.getUsers(filter).pipe(
      map((z) => z.result),
      shareReplay()
    );
  }
}
