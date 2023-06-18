import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { NewCardModule } from 'src/app/common/modules/new-card/new-card.module';
import { UserItemModule } from 'src/app/common/modules/user-item/user-item.module';
import { BirthdayPersonsWidgetModule } from 'src/app/modules/widgets/birthday-persons/birthday-persons.widget.module';
import { NewEmployeesWidgetModule } from 'src/app/modules/widgets/new-employees-widget/new-employees.widget.module';
import { NewsWidgetModule } from 'src/app/modules/widgets/news-widget/news.widget.module';

const DECLARATIONS = [
  HomeComponent,
];
@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule,
    SharedModule,
    NewCardModule,
    NewsWidgetModule,
    UserItemModule,
    NewEmployeesWidgetModule,
    BirthdayPersonsWidgetModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],

  providers: [],
})
export class HomePageModule {}
