import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { UserComponent } from './components/user/user.component';
import { DataRowComponent } from './components/data-row/data-row.component';
import { ProjectTeamComponent } from './components/project-team/project-team.component';
import { UserFacade } from './user.facade.sevice';
import { UserReducer } from './store/user.reducer';
import { UserEffects } from './store/user.effects';

const DECLARATIONS = [UserComponent, DataRowComponent, ProjectTeamComponent];
@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('userState', UserReducer),
    EffectsModule.forFeature([UserEffects]),
    RouterModule.forChild([
      {
        path: '',
        component: UserComponent,
      },
    ]),
  ],

  providers: [UserFacade],
})
export class UserPageModule {}
