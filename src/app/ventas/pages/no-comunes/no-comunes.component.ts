import { Component } from '@angular/core';
import {interval} from "rxjs";

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

    // KeyValue Pipe
    persona = {
        nombre: 'Fernando',
        edad: 35,
        direccion: 'Barranquilla, Colombia'
    }
    
    // Json Pipe
    heroes =[
        {nombre: 'Superman', vuela: true},
        {nombre: 'Robin', vuela: false},
        {nombre: 'Aqua-man', vuela: false},
    ]
    
    // Async Pipe
    miObservable= interval(1000);
    
    valorPromesa = new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve('Fin de la promesa, Tenemos data de promesa')
        }, 3500)
    })

}
