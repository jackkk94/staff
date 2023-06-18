import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from 'src/app/common/models/user.model';
import { AuthFacade } from 'src/app/modules/core/services/auth.facade.sevice';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  link: string;
  currentUser$: Observable<User>
  
  constructor(
    private authService: AuthFacade
  ) {
    this.currentUser$ = this.authService.currentUser$.pipe(tap(user=> user && (this.link = `/employees/${user.id}`)));
   }
}
