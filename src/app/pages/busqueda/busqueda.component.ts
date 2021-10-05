import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent implements OnInit {
  movie?: Movie;
  constructor() {}

  ngOnInit(): void {}

  selectMovie(movie: Movie) {
    this.movie = movie;
  }
}
