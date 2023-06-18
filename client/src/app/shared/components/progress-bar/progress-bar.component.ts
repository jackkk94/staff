import { Component, Input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls:['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent {
  @Input() public set value(data: number) {
    this._value = data;
    this.width = (data / this.max) * 100;
  }

  @Input() public label: string;

  @Input() public max: number;

  public get value(): number {
    return this._value;
  }

  public width: number;

  private _value = 0;

}
