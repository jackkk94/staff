import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './modules/core/core.module';
import { HeaderModule } from './common/modules/header/header.module';
import { FooterModule } from './common/modules/footer/footer.module';
import { LoaderModule } from './common/modules/loader/loader.module';
import { AuthInterceptor } from './modules/core/services/auth.interceptor';
import { AuthGuardService } from './modules/core/services/auth-guard.service';
import { AuthReducer } from './common/store/auth/auth.reducer';
import { AuthEffects } from './common/store/auth/auth.effects';
import { environment } from '../environments/environment';


const LAYOUT_MODULES = [
  HeaderModule,
  FooterModule,
  LoaderModule
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    BrowserAnimationsModule,
    StoreModule.forRoot({authState: AuthReducer}),
    EffectsModule.forRoot([AuthEffects]),
    SharedModule,
    ...LAYOUT_MODULES,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],

  providers: [
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
