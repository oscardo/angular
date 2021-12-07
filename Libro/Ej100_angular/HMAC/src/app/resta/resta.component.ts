import { Component, OnInit } from '@angular/core';
import { Numerales } from '../numerales';

let valores: Numerales = {
  operador1: 23, 
  operador2: 20,
  resultado: 23-20,
  operacion: "resta"
}

@Component({
  selector: 'app-resta',
  templateUrl: './resta.component.html',
  styleUrls: []
})
export class RestaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
