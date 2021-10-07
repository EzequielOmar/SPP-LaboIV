import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Actor, dbName_Actors } from 'src/app/clases/actor';
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
  actors: Array<Actor> = [];
  imagesLoaded: Boolean = false;
  constructor(private db: DbService, private fl: FileService) {
    this.getMovies();
  }

  ngOnInit(): void {}

  selectMovie(movie: Movie) {
    this.movie = movie;
    this.getActorsForMovie(movie.movie.actores);
  }

  private getMovies() {
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

  private getActorsForMovie(actors: Array<string>) {
    this.db.getActorsOfMovie(actors).then((a: any) => {
      this.actors = a;
      console.log(this.actors);
    });
  }
}
