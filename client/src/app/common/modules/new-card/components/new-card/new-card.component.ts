import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { New } from 'src/app/pages/new/models/new.model';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewCardComponent {
  @Input()
  public data: New;

  @Input() 
  public link: string;
}
