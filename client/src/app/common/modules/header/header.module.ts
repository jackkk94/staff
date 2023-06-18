import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [ RouterModule, CommonModule, HttpClientModule, SharedModule],
  exports: [HeaderComponent],
  providers: [],
})
export class HeaderModule {}
