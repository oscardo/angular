import { Component, OnInit } from '@angular/core';
import { Numerales } from '../numerales';

export let operadores: Numerales = {
  operador1: 3,
  operador2: 4,
  operacion: "Division",
  resultado: 7
}

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: []
})
export class DivisionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
