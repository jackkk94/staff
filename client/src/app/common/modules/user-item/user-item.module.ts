import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { UserItemComponent } from './components/user-item/user-item.component';

const DECLARATIONS = [UserItemComponent];
@NgModule({
  declarations: DECLARATIONS,
  imports: [CommonModule, SharedModule, RouterModule],
  exports: DECLARATIONS,
})
export class UserItemModule {}
