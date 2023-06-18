import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthFacade } from './auth.facade.sevice';
import { Observable, map } from 'rxjs';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthFacade, public router: Router) {}
  canActivate(): Observable<boolean> {
    return this.auth.isAuthenticated$.pipe(
      map((res) => {
        if (!res) {
          this.router.navigate(['/login']);
        }

        return res;
      })
    );
  }
}
