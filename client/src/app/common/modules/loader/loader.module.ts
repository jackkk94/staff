import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoaderComponent } from './components/loader/loader.component';
import { MaterialModule } from 'src/app/shared/material-module';

@NgModule({
  declarations: [LoaderComponent],
  imports: [MaterialModule, CommonModule],
  exports: [LoaderComponent],
  providers: [],
})
export class LoaderModule {}
