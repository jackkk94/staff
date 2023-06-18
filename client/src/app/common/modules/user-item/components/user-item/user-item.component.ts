import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { User } from 'src/app/common/models/user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserItemComponent {
  @Input()
  public user: User;

  get link(){
    return `/employees/${this.user.id.toString()}`;
  }
}
