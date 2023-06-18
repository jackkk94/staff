import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Observable, Subscription, debounceTime, forkJoin, map, tap } from 'rxjs';

import { New } from 'src/app/pages/new/models/new.model';
import {
  DEFAULT_PAGE_SIZE,
  PaginationEvent,
} from 'src/app/shared/components/pagination/pagination.component';
import { NewsFacade } from '../../news.facade.sevice';
import { NewsSearchFilter } from '../../models/news-search.model';
import { NewCategory } from 'src/app/pages/new/models/new-category.model';
import { AuthFacade } from 'src/app/modules/core/services/auth.facade.sevice';
import { UserRole } from 'src/app/common/models/user.model';
import { LoaderService } from 'src/app/modules/core/services/loader.service';

const DEBOUNCE_TIME = 1000;
const roles = [UserRole.Admin, UserRole.Manager];

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent {
  news$ = this.newsFacade.news$;
  canCreate$: Observable<boolean>;

  public skip = this.newsFacade.skipValue$;
  public take = 15;
  private subscription = new Subscription();
  public total$ = this.newsFacade.totalNews$;
  public filterByCategoriesData$ = this.newsFacade.filterByCategoriesData$;

  public formFilters = new FormGroup({
    name: new FormControl(''),
    newCategories: new FormControl(null),
  });

  constructor(
    private router: Router,
    private newsFacade: NewsFacade,
    private authService: AuthFacade,
    public loaderService: LoaderService
  ) {
    this.newsFacade.LoadFiltersData();

    this.subscription.add(
      this.formFilters.valueChanges
        .pipe(
          tap(() => this.loaderService.show()),
          debounceTime(DEBOUNCE_TIME)
          )
        .subscribe((form) => {
          const filters = {
            take: this.take,
            fullName: form.name,
            newCategories: form.newCategories,
          } as NewsSearchFilter;

          this.newsFacade.updateFilters(filters);
        })
    );

    this.canCreate$ = this.authService.currentUser$.pipe(
      map((u) => roles.includes(u.role))
    );
  }

  public onPaginationChange(event: PaginationEvent): void {
    this.newsFacade.updateFilters({ skip: event.pageIndex });
  }

  public resetFilters() {
    this.formFilters.reset();
  }

  public create(): void {
    this.router.navigate(['/company-news/create']);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
