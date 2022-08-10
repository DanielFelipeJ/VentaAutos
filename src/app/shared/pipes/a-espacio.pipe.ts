import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aEspacio'
})
export class AEspacioPipe implements PipeTransform {

  transform(valor: string, reemplazar: string): string {
    let sustituye: string = " ";
    return valor.replace( reemplazar, sustituye );
  }

}
