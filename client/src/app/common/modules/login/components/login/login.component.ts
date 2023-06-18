import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from 'src/app/common/models/auth.model';
import { AuthFacade } from 'src/app/modules/core/services/auth.facade.sevice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent {
  @Output()
  public submited = new EventEmitter<LoginRequest>();

  public form = new FormGroup({
    login: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  public submit(){
    if(this.form.invalid) return;

    this.submited.emit(this.form.value as LoginRequest);
  }
}
