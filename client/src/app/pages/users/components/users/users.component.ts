import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { User } from 'src/app/common/models/user.model';

import {
  DEFAULT_PAGE_SIZE,
  PaginationEvent,
} from 'src/app/shared/components/pagination/pagination.component';
import { UsersFacade } from '../../users.facade.sevice';
import {
  Observable,
  Subscription,
  debounceTime,
  forkJoin,
  map,
  tap,
} from 'rxjs';
import { UserFiltersData, UserSearchFilter } from '../../models/user-search.model';
import { City } from 'src/app/common/models/city.model';
import { Position } from 'src/app/common/models/position.model';
import { LoaderService } from 'src/app/modules/core/services/loader.service';

const DEBOUNCE_TIME = 1000;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnDestroy {
  public users$ = this.usersFacade.users$;

  public skip = this.usersFacade.skipValue$;
  public take = DEFAULT_PAGE_SIZE;
  public total$ = this.usersFacade.totalUsers$;

  private subscription = new Subscription();

  public filterData$ = this.usersFacade.filtersData$

  public formFilters = new FormGroup({
    name: new FormControl(''),
    city: new FormControl(null),
    position: new FormControl(null),
  });

  constructor(
    private usersFacade: UsersFacade,
    private cdr: ChangeDetectorRef,
    public loaderService: LoaderService
  ) {
    this.usersFacade.LoadFiltersData();

    this.subscription.add(
      this.formFilters.valueChanges
        .pipe(
          tap(() => this.loaderService.show()),
          debounceTime(DEBOUNCE_TIME)
        )
        .subscribe((form) => {
          const filter = {
            take: 10,
            fullName: form.name,
            city: form.city,
            position: form.position,
          } as UserSearchFilter;

          this.usersFacade.updateFilters(filter);
        })
    );

  }


  public onPaginationChange(event: PaginationEvent): void {
    this.usersFacade.updateFilters({ skip: event.pageIndex });
  }

  public resetFilters() {
    this.formFilters.reset();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
