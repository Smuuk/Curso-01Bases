import { Component } from '@angular/core';
import { Personaje } from '../interfaces/atla.interface';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'Aang',
      poder: 15000
    },
    {
      nombre: 'Katara',
      poder: 8000
    }
  ];

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregarNuevoPersonaje(argumento: Personaje){
this.personajes.push(argumento);
  }

// cambiarNombre( event: any ){
//   console.log(event )
// }
 

}
