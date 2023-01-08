import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dash',
})
export class DashPipe implements PipeTransform {

  transform(value: string, prefix: string): string {
    if (value.length === 0) {
      return prefix;
    }
    return prefix + '-' + value;
  }

}
