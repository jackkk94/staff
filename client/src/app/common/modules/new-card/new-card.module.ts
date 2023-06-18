import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { NewsComponent } from 'src/app/pages/news/components/news/news.component';
import { NewsListComponent } from 'src/app/pages/news/components/news-list/news-list.component';
import { NewsFacade } from 'src/app/pages/news/news.facade.sevice';
import { NewCardComponent } from './components/new-card/new-card.component';

const DECLARATIONS = [NewCardComponent];
@NgModule({
  declarations: DECLARATIONS,
  imports: [SharedModule, RouterModule],
  exports: DECLARATIONS,
})
export class NewCardModule {}
