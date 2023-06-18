import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UserItemModule } from 'src/app/common/modules/user-item/user-item.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BirthdayPersonsComponent } from './birthday-persons.component';
import { BirthdayPersonsWidgetFacade } from './birthday-persons.widget.facade.sevice';

const DECLARATIONS = [
  BirthdayPersonsComponent
];
@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule,
    UserItemModule,
    SharedModule,
  ],
  exports:[DECLARATIONS],
  providers: [BirthdayPersonsWidgetFacade],
})
export class BirthdayPersonsWidgetModule {}
