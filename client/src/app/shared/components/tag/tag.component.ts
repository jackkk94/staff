import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

type Size = 'small';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagComponent {
  @Input()
  public size: Size = 'small';
}
