import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable, map, of } from 'rxjs';
import { User } from 'src/app/common/models/user.model';
import { UserFacade } from '../../user.facade.sevice';

@Component({
  selector: 'app-project-team',
  templateUrl: './project-team.component.html',
  styleUrls: ['./project-team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectTeamComponent {

  team$ = this.userFacade.teamMembers$;

  @Input()
  public set id(value: Guid) {
    this.userFacade.loadProjectTeam(value.toString());
  }

  constructor(private userFacade: UserFacade) {}

  public getlink(id: Guid): string {
    return `/employees/${id.toString()}`;
  }
}
