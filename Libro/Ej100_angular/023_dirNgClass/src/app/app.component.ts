import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '023_dirNgClass';
  fondoAmarillo: boolean = false;
  letraGrande:boolean    = false;
  checkFondo(){
    this.fondoAmarillo = !this.fondoAmarillo;
  }
  checkLetra(){
    this.letraGrande = !this.letraGrande;
  }
  asignaClases(){
    let Classes = {
      fa: this.fondoAmarillo,
      lg: this.letraGrande
    }
    return Classes;
  }
}
