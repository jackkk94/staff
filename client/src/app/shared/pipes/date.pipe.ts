import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appDate',
})
export class AppDatePipe implements PipeTransform {
  constructor(private pipe: DatePipe) {}
  transform(value: Date): string {
    return this.pipe.transform(value, 'dd.MM.YYYY');
  }
}
