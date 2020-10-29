import { Component, OnInit } from '@angular/core';
import { PeliculaCartService } from '../pelicula-cart.service';
import { Pelicula } from './Pelicula';

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.css']
})
export class PeliculaListComponent implements OnInit {

  peliculas: Pelicula[] = [{
    img:"assets/img/batman_mini.jpeg",
    name: "Batman",
    genero: "Accion",
    estreno : 25,
    disponible: 10,
    reserva : 0,
  },
  {
    img:"assets/img/batman_mini.jpeg",
    name: "Spiderman",
    genero: "Aaventur",
    estreno : 20,
    disponible: 5,
    reserva : 0,
  }, 
  {
    img:"assets/img/batman_mini.jpeg",
    name: "Titanic",
    genero: "Romantica",
    estreno :21,
    disponible: 0,
    reserva : 0,
  }
  ];


  constructor(private cart: PeliculaCartService) {
   }

  ngOnInit(): void {
  }

addToCart(pelicula): void{
  this.cart.addToCart(pelicula);
  pelicula.disponible-= pelicula.reserva;
  pelicula.reserva = 0;
}

}
