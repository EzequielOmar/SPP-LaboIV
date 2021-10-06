import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { dbName_Movies, Movie } from 'src/app/clases/pelicula';
import { DbService } from 'src/app/services/db.service';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent implements OnInit {
  movie?: Movie;
  movies: Array<Movie> = [];
  imagesLoaded: Boolean = false;
  constructor(private db: DbService, private fl: FileService) {
    //Obtener todas las peliculas
    this.db.getObserver(dbName_Movies).onSnapshot((snap) => {
      this.movies = [];
      snap.forEach((child: any) => {
        this.movies.push({ id: child.id, movie: child.data() });
      });
      this.fl.getMoviePicUrl(this.movies);
      setTimeout(() => {
        this.imagesLoaded = true;
      }, 1000);
    });
  }

  ngOnInit(): void {}

  selectMovie(movie: Movie) {
    this.movie = movie;
  }
}
