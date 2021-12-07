import { Attribute, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component {

  contaClick:number =0;
  contaOver :number =0; 
  constructor() 
  {
    //console.log(Atributo);
   }

   @HostListener(`click`, [`$event`]){
     onHostClick(event:Event){
       console.log("Click en app: " + event);
       this.contaClick += 1;
     }
   }


}
