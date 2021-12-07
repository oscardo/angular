import { Component, OnInit } from '@angular/core';
import { Numerales } from '../numerales'

export let operaciones: Numerales ={
  operador1: 12,
  operador2: 4,
  resultado: 0,
  operacion: "Multiplicacion"
}

@Component({
  selector: 'app-multiplicacion',
  templateUrl: './multiplicacion.component.html',
  styleUrls: []
})
export class MultiplicacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
