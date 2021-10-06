import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula-fija',
  templateUrl: './tabla-pelicula-fija.component.html',
  styleUrls: ['./tabla-pelicula-fija.component.scss'],
})
export class TablaPeliculaFijaComponent implements OnInit {
  @Input() movies!: Array<Movie>;
  @Input() imagesLoaded!: Boolean;

  constructor() {}

  ngOnInit(): void {}
}
