import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  Self,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
} from '@angular/forms';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextboxComponent implements ControlValueAccessor {
  @Input() readonly = false;

  public value = '';
  private onChange = (_: string) => {};
  constructor(@Self() public control: NgControl, private cdr: ChangeDetectorRef) {
    this.control.valueAccessor = this;
  }

  public writeValue(value: string) {
    this.value = value ?? '';
    this.cdr.detectChanges();
  }
  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public handleChange(e: any): void{
    this.value = e.target.value;
    this.onChange(this.value);
  }

  public registerOnTouched() {}

  public get notFilled(): boolean {
    const errors = this.control.errors as { required: boolean };

    return !this.value && this.control.invalid && errors?.required && this.control.dirty;
  }
}
