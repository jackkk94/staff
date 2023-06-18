import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextEditorComponent {
  @Input()
  public control: FormControl;

  @Input()
  public readonly = false;

  @Input()
  public placeholder: string;


  constructor(private cdr: ChangeDetectorRef){}

  public ngAfterViewInit(): void{
    this.cdr.detectChanges();
  }

  public get notFilled(): boolean {
    const errors = this.control.errors as { required: boolean };

    return !this.control.value && this.control.invalid && errors?.required && this.control.dirty;
  }
}
