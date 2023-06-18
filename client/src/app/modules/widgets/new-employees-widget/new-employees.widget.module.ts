import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NewEmployeesWidgetComponent } from './new-employees-widget.component';
import { NewEmployeesWidgetFacade } from './new-employees.widget.facade.sevice';
import { NewCardModule } from 'src/app/common/modules/new-card/new-card.module';
import { UserItemModule } from 'src/app/common/modules/user-item/user-item.module';
import { SharedModule } from 'src/app/shared/shared.module';

const DECLARATIONS = [
  NewEmployeesWidgetComponent
];
@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule,
    UserItemModule,
    SharedModule,
  ],

  exports:[DECLARATIONS],
  providers: [NewEmployeesWidgetFacade],
})
export class NewEmployeesWidgetModule {}
