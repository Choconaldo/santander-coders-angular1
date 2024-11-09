import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cep',
  standalone: true,
})
export class CepPipe implements PipeTransform {
  transform(cep: string): string {
    const formatedPhoneNumber = cep.replace(/(\d{5})?(\d{3})/, '$1-$2');
    return formatedPhoneNumber;
  }
}
