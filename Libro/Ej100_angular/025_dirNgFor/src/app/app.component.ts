import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '025 dirNgFor';
  public nombres = [
    {nom:"uno",edad:10},
    {nom:"dos",edad:20},
    {nom:"tres",edad:30},
    {nom:"cuatro",edad:34}

  ];
}
