import { Component } from '@angular/core';

@Component({
    selector: 'app-basicos',
    templateUrl: './basicos.component.html',
    styles: [
    ]
})
export class BasicosComponent{

    nombreLower = 'deiber olivares';
    nombreUpper = 'DEIBER OLIVARES';
    nombreCompleto = 'deiBer olIVaRes';
    
    fecha : Date = new Date();

}
