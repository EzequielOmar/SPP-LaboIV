import { Component, OnInit } from '@angular/core';
import { Actor, dbName_Actors } from 'src/app/clases/actor';
import { Country, dbName_Countries } from 'src/app/clases/pais';
import { Movie } from 'src/app/clases/pelicula';
import { DbService } from 'src/app/services/db.service';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-actores-peliculas',
  templateUrl: './actores-peliculas.component.html',
  styleUrls: ['./actores-peliculas.component.scss'],
})
export class ActoresPeliculasComponent implements OnInit {
  actors: Array<Actor> = [];
  actor?: Actor;
  pais?: Country;
  movies: Array<Movie> = [];
  imagesLoaded: Boolean = false;

  constructor(private db: DbService, private fl: FileService) {
    this.getActors();
  }

  ngOnInit(): void {}

  selectActor(actor: Actor) {
    this.imagesLoaded = false;
    this.actor = actor;
    //Obtener pais
    this.db.getCountryByName(actor.actor.pais).then((c: any) => {
      this.pais = c;
    });
    //Obtener peliculas
    this.db.getMoviesByActorId(actor.id).then((m: Array<Movie>) => {
      this.movies = m;
      this.fl.getMoviePicUrl(this.movies);
      setTimeout(() => {
        this.imagesLoaded = true;
      }, 1000);
    });
  }

  private getActors() {
    this.db.getObserver(dbName_Actors).onSnapshot((snap) => {
      this.actors = [];
      snap.forEach((child: any) => {
        this.actors.push({ id: child.id, actor: child.data() });
      });
    });
  }
}
