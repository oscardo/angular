import { Component, OnInit } from '@angular/core';

export let opcion: string = "";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '026 dirNgSwitch';
  opcion: string = "";
  constructor(public opcio : string = ""){
    opcion = opcio;
  }

}
