import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UsersComponent } from './components/users/users.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UsersFacade } from './users.facade.sevice';
import { UsersReducer } from './store/users.reducer';
import { UsersEffects } from './store/users.effects';

const DECLARATIONS = [
  UsersComponent,
  UserCardComponent,
  UserListComponent,
];
@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('usersState', UsersReducer),
    EffectsModule.forFeature([UsersEffects]),
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent,
      },
      {
        path: ':id',
        loadChildren: () => import('./../user/user.page.module').then(m => m.UserPageModule)
      }
    ]),
  ],

  providers: [UsersFacade],
})
export class UsersPageModule {}
