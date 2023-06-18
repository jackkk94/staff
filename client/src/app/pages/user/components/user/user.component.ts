import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { UserFacade } from '../../user.facade.sevice';
import { Observable, map, of, switchMap, tap } from 'rxjs';
import { User } from 'src/app/common/models/user.model';
import { AuthFacade } from 'src/app/modules/core/services/auth.facade.sevice';
import { UserUpdateRequest } from './models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  public id: string;
  public initialValue$ = this.userFacade.initialValue$;

  public form = new FormGroup({
    phone: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    info: new FormControl(null, [Validators.required]),
    birthday: new FormControl(null),
  });

  constructor(
    private userFacade: UserFacade,
    activateRoute: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
    public authService: AuthFacade
  ) {
    activateRoute.params
      .pipe(
        map((params) => (this.id = params['id'])),
        tap(() => {
          if (!this.id) {
            this.router.navigate(['/users']);
            return;
          }

          this.userFacade.loadUser(this.id);
        })
      )
      .subscribe(() => {
        this.cdr.markForCheck();
      });

    this.initialValue$.pipe(
      tap((value) => {
        if (!value) return;

        this.userFacade.setMode('view');
        this.form.reset(value);
        this.form.setErrors(null);
        this.cdr.markForCheck();
      })
    ).subscribe(() => {});
  }

  public handleEditClick(): void {
    this.userFacade.setMode('edit');
  }

  public get canEdit$(): Observable<boolean> {
    return this.authService.currentUser$.pipe(
      map((u) => u.id.toString() === this.id)
    );
  }

  public get editMode(): boolean {
    return this.userFacade.pageMode === 'edit';
  }

  public cancel(): void {
    this.userFacade.cancelUpdate();
  }

  public save(): void {
    if (this.form.invalid) return;

    const data = this.form.value as UserUpdateRequest;
    this.userFacade.updateUser(this.id, data);
  }
}
