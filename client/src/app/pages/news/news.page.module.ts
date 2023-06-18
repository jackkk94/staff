import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { NewsComponent } from './components/news/news.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsFacade } from './news.facade.sevice';
import { NewCardModule } from 'src/app/common/modules/new-card/new-card.module';
import { NewsReducer } from './store/news.reducer';
import { NewsEffects } from './store/news.effects';

const DECLARATIONS = [NewsComponent, NewsListComponent];
@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule,
    SharedModule,
    NewCardModule,
    StoreModule.forFeature('newsState', NewsReducer),
    EffectsModule.forFeature([NewsEffects]),
    RouterModule.forChild([
      {
        path: '',
        component: NewsComponent,
      },
      {
        path: ':id',
        loadChildren: () =>
          import('./../new/new.page.module').then((m) => m.NewPageModule),
      },
    ]),
  ],

  providers: [NewsFacade],
})
export class NewsPageModule {}
