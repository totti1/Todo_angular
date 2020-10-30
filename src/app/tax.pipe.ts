import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tax'
})
export class TaxPipe implements PipeTransform {

  transform(value: any): number {
    let total:number = (value * 3)/100
    let full_total:number = value+total
    return full_total;
  }

}
