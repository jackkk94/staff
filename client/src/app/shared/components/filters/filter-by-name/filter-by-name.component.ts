import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnDestroy,
  Output,
  Self,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NgControl,
} from '@angular/forms';
import { Subscription, debounceTime, distinctUntilChanged, filter } from 'rxjs';

const MIN_TEXT_LENGTH = 2;
const DEBOUNCE_TIME = 300;

@Component({
  selector: 'app-filter-by-name',
  templateUrl: './filter-by-name.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterByNameComponent
  implements ControlValueAccessor, OnDestroy
{
  public subscription = new Subscription();

  public nameControl = new FormControl('');

  public previosValue = '';

  onChange = (value: string) => {};
  onTouched = () => {};

  constructor(@Self() public control: NgControl, private cdr: ChangeDetectorRef) {
    this.control.valueAccessor = this;

    this.subscription = this.nameControl.valueChanges
      .pipe(
        debounceTime(DEBOUNCE_TIME),
        distinctUntilChanged(),
        filter((z) => !z?.length || z.length >= MIN_TEXT_LENGTH)
      )
      .subscribe((value) => {
        this.onChange(value);
        this.previosValue = value;
      });
  }

  writeValue(value: string) {
    if(value === this.previosValue) return
    
    this.previosValue = value;
    this.nameControl.setValue(value);
    this.control.control.patchValue(value, { emitEvent: false });
    this.cdr.detectChanges();
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }
x
  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
