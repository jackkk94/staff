import { ChangeDetectionStrategy, Component, Input, OnInit, Self } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { Guid } from 'guid-typescript';
import { ISelectData } from '../select/select.component';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiselectComponent implements ControlValueAccessor {
  @Input() data?: ISelectData[];
  @Input() label?: string;
  public previosValue = [];

  onChange = (value: Guid[]) => {};
  onTouched = () => {};

  constructor(@Self() public control: NgControl) {
    this.control.valueAccessor = this;
  }
  
  writeValue(value: Guid[] | null) {
    if(this.previosValue === value) return;

  
    this.previosValue = value;
    this.control.control.setValue(value ?? []);
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  handleChange({value}:MatSelectChange){
    this.onChange(value);
  }

  getControl(c: AbstractControl): FormControl {
    return c as FormControl
  }
}
