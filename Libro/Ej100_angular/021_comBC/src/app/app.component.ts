import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comBC';
  valor1:     string     = "";
  valor2:     string     = "";
  resultadoP: number     = 0;
  captuResultado(event:number) {
    this.resultadoP = event;
  }
}
