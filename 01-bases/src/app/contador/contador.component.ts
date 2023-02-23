import { Component } from '@angular/core'


@Component({
    selector: 'app-contador',
    template: `
    <p>
    {{bobafet}}
  </p>

  <!-- <button (click)="acumular(+1)"> + 1</button>
  <span> {{num}} </span>
  <button (click)="acumular(-1)"> - 1</button> -->

  <h3>Tarea</h3>
  <!-- forma ocurrida -->
  <button (click)="acumular2()"> + 5</button>
  <span> {{num}} </span>
  <button (click)="disminuir()"> - 5</button>
<br><br>
  <!-- forma propuesta del curso -->
  <button (click)="acumular(base)"> + 5</button>
  <span> {{num}} </span>
  <button (click)="acumular(-base)"> - 5</button>
  <br><br>
  <hr><hr>
    `
})

export class ContadorComponent {
    bobafet: string = 'Contador de app';
    num: number = 0;
    base: number = 5;
    acumular(valor: number) {
        this.num += valor;
    }

    acumular2() {
        this.num += this.base;
    }
    disminuir() {
        this.num -= this.base;
    }
}

