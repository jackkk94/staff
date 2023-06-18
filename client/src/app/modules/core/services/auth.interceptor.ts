import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, finalize, tap, throttleTime } from 'rxjs';
import { AuthFacade } from './auth.facade.sevice';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/modules/core/services/loader.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authFacade: AuthFacade,
    private router: Router,
    private loaderService: LoaderService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set(
        'Authorization',
        `Bearer ${this.authFacade.token}`
      ),
    });

    this.loaderService.show();
    return next.handle(authReq).pipe(
      tap(
        (event) => {},
        (err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status == 401) this.router.navigate(['/login']);
          }
        }
      ),
      finalize(() => this.loaderService.hide())
    );
  }
}
