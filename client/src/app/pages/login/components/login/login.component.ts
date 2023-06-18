import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoginRequest } from 'src/app/common/models/auth.model';
import { AuthFacade } from 'src/app/modules/core/services/auth.facade.sevice';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(private authFacade: AuthFacade) {}

  public submit(form: LoginRequest): void {
    this.authFacade.login(form);
  }
}
