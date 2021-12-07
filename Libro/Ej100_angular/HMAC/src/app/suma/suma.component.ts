import { Component } from '@angular/core';
import { Numerales } from '../numerales'

export let valores: Numerales = {
    operador1: 0,
    operador2: 0,
    resultado: 0,
    operacion: "suma"
}

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: []
})
export class SumaComponent  {
  valores: Numerales = {
    operador1: 1,
    operador2: 2,
    resultado: 2+3,
    operacion: "+"
  }
  constructor() {
    console.table(valores);
  }

}
