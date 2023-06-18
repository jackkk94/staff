import { ChangeDetectionStrategy, Component, OnInit, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateRangeComponent implements ControlValueAccessor {

  onChange = (value: Date) => {};
  onTouched = () => {};
  public previosValue: Date;

  value: Date;
  constructor(@Self() public control: NgControl) {
    this.control.valueAccessor = this;
  }

  writeValue(value: Date | null) {
    this.value = value;
    if (value && String(this.previosValue) === String(value)) return;

    this.previosValue = new Date(value);
    this.control.control.setValue(value);
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public handleChange(e: any): void {
    this.onChange(e.value ? new Date(e.value) : null);
  }
}
