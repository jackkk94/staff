import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { New, NewRequest } from '../../models/new.model';
import { Guid } from 'guid-typescript';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User, UserRole } from 'src/app/common/models/user.model';
import { Observable, map, of, switchMap, tap } from 'rxjs';
import { NewCategory } from '../../models/new-category.model';
import { NewsFacade } from 'src/app/pages/news/news.facade.sevice';
import { NewFacade } from '../../new.facade.sevice';
import { AuthFacade } from 'src/app/modules/core/services/auth.facade.sevice';

export type Mode = 'edit' | 'view' | 'create';
export type NewDatasources = {
  categories: NewCategory[];
};

const roles = [UserRole.Admin, UserRole.Manager];

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewComponent {
  public id: string;
  public initialValue$ = this.newFacade.initialValue$;

  public form = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    summary: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    category: new FormControl(null, [Validators.required]),
  });

  public categories$ = this.newFacade.categoryDataSources$;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private newFacade: NewFacade,
    private cdr: ChangeDetectorRef,
    public  authService: AuthFacade
  ) {}

  public ngOnInit(): void {
    this.activateRoute.paramMap
      .pipe(
        tap((params: ParamMap) => {
          this.id = params.get('id');
          const mode = this.id === 'create' ? 'create' : 'view';

          this.newFacade.setMode(mode);

          if (!this.id && mode !== 'create') {
            this.router.navigate(['/company-news']);
          }

          if (this.id && mode !== 'create') {
            this.newFacade.loadNew(this.id);
          }
        })
      )
      .subscribe(() => {
        this.cdr.detectChanges();
      });

    this.initialValue$.pipe(
      tap((value) => {
        this.form.reset(value);
        this.form.setErrors(null);
        this.cdr.detectChanges();
      })
    );

    this.newFacade.loadDataSources();
  }

  public get isEditMode(): boolean {
    return this.newFacade.pageMode === 'edit';
  }

  public get isCreateMode(): boolean {
    return this.newFacade.pageMode === 'create';
  }

  public get isViewMode(): boolean {
    return this.newFacade.pageMode === 'view';
  }

  public handleEditClick(): void {
    this.newFacade.setMode('edit');
  }

  public canEdit(newValue: New, currentUser: User) {
    return newValue.author.id.toString() === currentUser.id.toString();
  }

  private resetMode(): void {
    this.newFacade.setMode('view');
  }

  public cancel(): void {
    if (this.isCreateMode) {
      this.router.navigate(['/company-news']);
      return;
    }

    this.resetMode();
    this.newFacade.cancelUpdate();
  }

  public submit(): void {
    if (this.form.invalid) return;

    const data = this.form.value as NewRequest;

    if (this.isCreateMode) {
      this.newFacade.createNew(data);
      return;
    }

    this.resetMode();
    this.newFacade.updateNew(this.id, data);
  }
}
