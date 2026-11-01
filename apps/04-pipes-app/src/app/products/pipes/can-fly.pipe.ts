import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): 'Can Fly!' | 'Cannot Fly :(' {
    return (value) ? 'Can Fly!' : 'Cannot Fly :(';
  }

}
