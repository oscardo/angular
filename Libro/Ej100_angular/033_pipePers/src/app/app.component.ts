import { Component } from '@angular/core';

export let dividendo:number = 0;
export let divisor:string = "";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Pipes: Pipes personalizados
  dividendo= 10;
  divisor = "2";

}
