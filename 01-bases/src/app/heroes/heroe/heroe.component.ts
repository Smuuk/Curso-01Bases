import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'

})

export class HeroeComponent {
    nombre: string = 'Daredevil';
    edad: number = 25;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerDatos(): string {
        return `${this.nombre} - ${this.edad}`;
    }

cambiarNombre(): void{
    this.nombre = 'Wolverine';
}
cambiarEdad(): void{
    this.edad= 300;
}

}