import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PeliculaListComponent } from './pelicula-list/pelicula-list.component';

import { FormsModule } from '@angular/forms';
import { PeliculaAboutComponent } from './pelicula-about/pelicula-about.component';
import { PeliculaPeliculasComponent } from './pelicula-peliculas/pelicula-peliculas.component';
import { CarritoComponent } from './carrito/carrito.component';



@NgModule({
  declarations: [
    AppComponent,
    PeliculaListComponent,
    PeliculaAboutComponent,
    PeliculaPeliculasComponent,
    CarritoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
