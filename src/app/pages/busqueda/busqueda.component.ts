import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent implements OnInit {
  movie?: Pelicula;
  constructor() {}

  ngOnInit(): void {}

  selectMovie(movie: Pelicula) {
    this.movie = movie;
  }
}
