import { Component } from '@angular/core';
export let nombre:string = "";
export let nombre2:string = "";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirNgModel';
  nombre:string     = "";
  nombre2:string    = "";
  constructor() { 
    this.nombre = "";
    this.nombre2 = "";
  }
  
  cambioNombre(){
    this.nombre  = this.nombre.toLowerCase();
    this.nombre2 = this.nombre2.toUpperCase();
  }
  cambioNombre2(){
    this.nombre  = this.nombre.toUpperCase();
    this.nombre2 = this.nombre2.toLowerCase();
  }
}
