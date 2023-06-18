import { Injectable } from '@angular/core';
import { Observable, share, shareReplay } from 'rxjs';
import { User } from 'src/app/common/models/user.model';
import { UsersApi } from '../users/api/users.api.service';
import { Project } from 'src/app/common/models/project.model';
import { ProjectsApi } from './api/projects.api.service';
import { UserUpdateRequest } from './components/user/models/user.model';
import { Store } from '@ngrx/store';
import { UserSelectors } from './store/user.selectors';
import { CancelUpdate, LoadProjectTeam, LoadUser, UpdateUser } from './store/user.actions';

export type UserPageMode = 'view' | 'edit';

@Injectable()
export class UserFacade {
  public initialValue$ = this.store.select(UserSelectors.initialValue);
  public projectTeam$ = this.store.select(UserSelectors.projectTeam);
  public teamMembers$ = this.store.select(UserSelectors.teamMembers);

  public pageMode: UserPageMode = 'view';

  constructor(
    private store: Store,
  ) {}

  public loadUser(id: string): void {
    this.store.dispatch(new LoadUser(id));
  }

  public loadProjectTeam(id: string): void {
    this.store.dispatch(new LoadProjectTeam(id));
  }

  public updateUser(id: string, data: UserUpdateRequest): void {
    this.store.dispatch(new UpdateUser({ id, data }));
  }

  public setMode(mode: UserPageMode): void {
    this.pageMode = mode;
  }

  public cancelUpdate(): void {
    this.store.dispatch(new CancelUpdate())
  }
}
