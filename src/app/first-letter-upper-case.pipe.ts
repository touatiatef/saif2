import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterUpperCase',
  standalone: true
})
export class FirstLetterUpperCasePipe implements PipeTransform {

  transform(value: String): String {
    return value[0].toUpperCase()+value.slice(1);
    //return value[0].toUpperCase()+value.substring(1,length)
  }

}
