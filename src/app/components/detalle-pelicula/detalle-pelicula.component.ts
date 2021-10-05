import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss'],
})
export class DetallePeliculaComponent implements OnInit {
  @Input() movie?: Movie;
  constructor() {}

  ngOnInit(): void {}
}
