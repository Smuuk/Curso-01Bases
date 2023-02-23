import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Magneto', 'Antman', 'Flash', 'Batman', 'Daredevil'];
  borradoHeroe: string = '';


  borrarHeroe() {
    const heroeBorrado = this.heroes.shift() || '';
    console.log(heroeBorrado);
    this.borradoHeroe = heroeBorrado;
  }
}
