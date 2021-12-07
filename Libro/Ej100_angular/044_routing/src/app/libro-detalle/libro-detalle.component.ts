// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, convertToParamMap, ParamMap, RouteConfigLoadEnd } from '@angular/router';
// import{ Libro } from'../libro.model';
// import { LIBROS } from '../mock';

// @Component({
//   selector: 'app-libro-detalle',
//   templateUrl: './libro-detalle.component.html',
//   styleUrls: ['./libro-detalle.component.css']
// })

// export class LibroDetalleComponent implements OnInit {
//   libro: Libro = new Libro;
  
//   constructor(private route: ActivatedRoute) { }

//   ngOnInit(): void {
//     this.route.paramMap
//       .subscribe((params: ParamMap) => {
//         let id:number = +params.get?('id')
//         this.libro =  LIBROS.find((item: { id: number; }) => item.id === id);
//       });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Libro } from '../libro.model';
import { LIBROS } from '../mock';

@Component({
  selector: 'app-libro-detalle',
  templateUrl: './libro-detalle.component.html',
  styleUrls: ['./libro-detalle.component.css']
})
export class LibroDetalleComponent implements OnInit {

  libro: Libro|any = new Libro();

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() : void{
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        let id = +params.get?('id'):Number;
        //this.libro = LIBROS.find(item => item.id === id);
        this.libro =  LIBROS.find((item: { id: number; }) => item.id === parseInt(id.toString()));
      });
  }

}

