import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { NewComponent } from './components/new/new.component';
import { NewReducer } from './store/new.reducer';
import { NewEffects } from './store/new.effects';
import { NewFacade } from './new.facade.sevice';

const DECLARATIONS = [
  NewComponent
];
@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('newState', NewReducer),
    EffectsModule.forFeature([NewEffects]),
    RouterModule.forChild([
      {
        path: '',
        component: NewComponent,
      },
    ]),
    
  ],

  providers: [NewFacade],
})
export class NewPageModule {}
