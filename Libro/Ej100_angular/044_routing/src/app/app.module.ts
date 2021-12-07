import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LibroListaComponent } from './libro-lista/libro-lista.component';
import { AutorListaComponent } from './autor-lista/autor-lista.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { LibroDetalleComponent } from './libro-detalle/libro-detalle.component';

import { LibroService } from './libro.service';
import { LoggerService } from './logger.service';
import { LibroObservableService } from './libro-observable.service';

const appRoutes: Routes = [
  {path: 'Libros', component: LibroListaComponent },
  {path: 'Autores', component: AutorListaComponent },
  {path: 'Libros/:id', component: LibroDetalleComponent },
  {path: '', redirectTo: '/Libros', pathMatch: 'full' },
  {path: '**', component: NotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    LibroListaComponent,
    AutorListaComponent,
    NotFoundComponent,
    LibroDetalleComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [LoggerService,LibroService,LibroObservableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
