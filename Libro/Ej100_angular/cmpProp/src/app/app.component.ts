import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string      = 'app Works!!!';
  ponFondo          = true;
  mostrar:boolean   = true;
  habilidad:boolean = false;
  referencia:string = "https:\\\\www.google.com";

}
