import { Component } from '@angular/core';

@Component({
    selector: 'app-no-comunes',
    templateUrl: './no-comunes.component.html',
    styles: [
    ]
})
export class NoComunesComponent {
    // i18nSelect
    nombre: string = 'Susana';
    genero: string = 'femenino';
    
    invitacionMapa =  {
        masmulino: 'invitarlo',
        femenino: 'invitarla'
    }
    
    // i18nPlural
    cliente: string[] = ['Maria', 'Pedro', 'Juan'];
    clientesMapa = {
        '=0' : 'no tenemos ningún cliente esperando',
        '=1' : 'tenemos un cliente esperando',
        'other' : 'tenemos # clientes esperando'
    }
    
    cambiarCliente(): void {
        this.nombre = 'Melisa';
        this.genero = 'femenino';
    }
    
    borrarCliente(): void {
        this.cliente.pop();
    }


}
