import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LibroListaComponent } from './libro-lista/libro-lista.component';
import { LoggerService }        from './logger.service';
import { LibroService }        from './libro.service';

@NgModule({
  declarations: [
    AppComponent,
    LibroListaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoggerService,LibroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
