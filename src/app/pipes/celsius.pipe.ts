import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsius',
})
export class CelsiusPipe implements PipeTransform {
  transform(value: number): string {
    return String(Math.ceil(value - 273.15)) + 'ºC'
  }
}
