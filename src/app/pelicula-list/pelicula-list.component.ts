import { Component, OnInit } from '@angular/core';
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
    disponible: true,
    reserva : 0,
  },
  {
    img:"assets/img/batman_mini.jpeg",
    name: "Spiderman",
    genero: "Aaventur",
    estreno : 20,
    disponible: false,
    reserva : 0,
  }, 
  {
    img:"assets/img/batman_mini.jpeg",
    name: "Titanic",
    genero: "Romantica",
    estreno : 0,
    disponible: false,
    reserva : 0,
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  upReserva(pelicula: Pelicula): void{
    if (pelicula.estreno){
          pelicula.reserva++;
      }
  }

  downReserva(pelicula: Pelicula): void{
    if (pelicula.reserva > 0){
      pelicula.reserva--;
    }
  }

  changeReserva(event, pelicula: Pelicula): void{
    console.log(event.key);
  }

}
