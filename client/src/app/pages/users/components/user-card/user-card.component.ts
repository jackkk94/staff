import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/common/models/user.model';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input()
  public user: User;

  get link(){
    return `/employees/${this.user.id.toString()}`;
  }
}
