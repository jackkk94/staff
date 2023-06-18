import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Guid } from 'guid-typescript';
import { User } from 'src/app/common/models/user.model';
import { NewEmployeesWidgetFacade } from './new-employees.widget.facade.sevice';
import { Observable } from 'rxjs';
import { DateRange } from 'src/app/common/models/search.model';
import { addDays } from 'src/app/shared/helpers/date';

const DEFAULT_DATE_RANGE = {
  start: addDays(new Date(), 30),
  end: new Date(),
} as DateRange;

@Component({
  selector: 'app-new-employees-widget',
  templateUrl: './new-employees-widget.component.html',
  styleUrls: ['./new-employees-widget.component.scss'],
  providers: [NewEmployeesWidgetFacade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewEmployeesWidgetComponent implements OnInit {
  @Input()
  public title = 'Новые сотрудники';

  @Input()
  public dateRange = DEFAULT_DATE_RANGE;

  public newEmpployees$: Observable<User[]>;

  constructor(private newEmployeesWidgetFacade: NewEmployeesWidgetFacade) {}

  public ngOnInit(): void {
    this.newEmpployees$ = this.newEmployeesWidgetFacade.loadNewEmployees(
      this.dateRange
    );
  }
}
