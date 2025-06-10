import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFyPipe implements PipeTransform {
  transform(value: boolean): 'Can Fly' | 'No Fly' {
    return value ? 'Can Fly' : 'No Fly';
  }
}
