import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-row',
  templateUrl: './data-row.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataRowComponent {
  @Input()
  public label: string;
}
