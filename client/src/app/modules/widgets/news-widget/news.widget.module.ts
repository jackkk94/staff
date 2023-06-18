import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { NewsWidgetComponent } from './news-widget.component';
import { NewCardModule } from 'src/app/common/modules/new-card/new-card.module';
import { NewsWidgetFacade } from './news-widget.facade.sevice';

const DECLARATIONS = [NewsWidgetComponent];
@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule,
    NewCardModule,
  ],
  exports: DECLARATIONS,
  providers: [NewsWidgetFacade],
})
export class NewsWidgetModule {}
