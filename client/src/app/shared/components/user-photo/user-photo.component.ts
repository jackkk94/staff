import { Component, Input } from '@angular/core';

type Size = 'small' | 'medium' | 'big';

@Component({
  selector: 'app-user-photo',
  templateUrl: './user-photo.component.html',
  styleUrls: ['./user-photo.component.scss']
})
export class UserPhotoComponent {
  @Input()
  public link: string;

  @Input()
  public size: Size = 'medium'
}
