import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-control-required',
  templateUrl: './required.component.html',
})
export class ControlRequiredComponent {
  @Input() text = "Обязательно для заполнения";
}
