import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: true,
})
export class PhonePipe implements PipeTransform {
  transform(tel: string): string {
    const formatedPhoneNumber = tel.replace(
      /(\d{2})?(\d{5})?(\d{4})/,
      '($1) $2-$3'
    );
    return formatedPhoneNumber;
  }
}
