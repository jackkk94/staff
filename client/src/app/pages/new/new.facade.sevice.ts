import { Injectable } from '@angular/core';
import { Store, createSelector } from '@ngrx/store';
import { Observable, forkJoin, from, map, shareReplay } from 'rxjs';
import { SearchResponse } from 'src/app/common/models/search.model';
import { NewsApi } from '../news/api/news.api.service';
import { NewSelectors } from './store/new.selectors';
import {
  CancelUpdate,
  CreateNew,
  LoadDataSources,
  LoadNew,
  UpdateNew,
} from './store/new.actions';
import { New, NewRequest } from './models/new.model';
import { Mode } from './components/new/new.component';
import { AuthFacade } from 'src/app/modules/core/services/auth.facade.sevice';
import { User, UserRole } from 'src/app/common/models/user.model';

@Injectable()
export class NewFacade {
  public initialValue$ = this.store.select(NewSelectors.initialValue);
  public categoryDataSources$ = this.store.select(
    NewSelectors.categoryDataSources
  );
  public pageMode: Mode = 'view';

  constructor(private store: Store) {}

  public loadNew(id: string): void {
    this.store.dispatch(new LoadNew(id));
  }

  public updateNew(id: string, data: NewRequest): void {
    this.store.dispatch(new UpdateNew({ id, data }));
  }

  public createNew(data: NewRequest): void {
    this.store.dispatch(new CreateNew(data));
  }

  public loadDataSources(): void {
    this.store.dispatch(new LoadDataSources());
  }

  public setMode(mode: Mode): void {
    this.pageMode = mode;
  }

  public cancelUpdate(): void {
    this.store.dispatch(new CancelUpdate())
  }
}
