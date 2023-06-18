import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { User } from 'src/app/common/models/user.model';
import { BirthdayPersonsWidgetFacade } from './birthday-persons.widget.facade.sevice';

@Component({
  selector: 'app-birthday-persons',
  templateUrl: './birthday-persons.component.html',
  styleUrls: ['./birthday-persons.component.scss'],
  providers:[BirthdayPersonsWidgetFacade],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BirthdayPersonsComponent implements OnInit {
  @Input()
  public title = 'Именинники';

  public users$: Observable<User[]>;

  constructor(private birthdayPersonsWidgetFacade: BirthdayPersonsWidgetFacade) {}

  public ngOnInit(): void {
    this.users$ = this.birthdayPersonsWidgetFacade.loadEmployees();
  }
}