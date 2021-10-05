import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { dbName_Movies, Movie } from 'src/app/clases/pelicula';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss'],
})
export class TablaPeliculaComponent {
  @ViewChild('content') content!: ElementRef;
  @Output() movieSelected: EventEmitter<Movie> = new EventEmitter<Movie>();
  movies: Array<Movie> = [];
  margin: number = 0;
  imagesLoaded: Boolean = false;
  constructor(
    private db: DbService,
    private rd: Renderer2,
    private fireStorage: AngularFireStorage
  ) {
    this.db.getObserver(dbName_Movies).onSnapshot((snap) => {
      this.movies = [];
      snap.forEach((child: any) => {
        this.movies.push({ id: child.id, movie: child.data() });
      });
      this.getRealUrls();
    });
  }

  /**
   * mueve la barra de lista de peliculas.
   * @param side 'l' o 'r' segun que flecha sea clickeada
   */
  swipe(side: string) {
    if (side == 'r') {
      this.margin -= 150;
    } else {
      this.margin += 150;
    }
    if (this.margin >= 0) {
      this.margin = 0;
    }
    if (this.margin <= (this.movies.length - 3) * -250) {
      this.margin = (this.movies.length - 3) * -250;
    }
    console.log(this.margin);
    this.rd.setStyle(
      this.content.nativeElement,
      'margin-left',
      this.margin + 'px'
    );
  }

  selectMovie(movie: Movie) {
    this.movieSelected?.emit(movie);
  }

  private getRealUrls() {
    this.movies.forEach((m) => {
      this.getRealUrl(m.movie.foto_path).then((url: string) => {
        m.movie.realUrl = url;
      });
    });
    setTimeout(() => {
      this.imagesLoaded = true;
    }, 1000);
  }

  private async getRealUrl(filename: string) {
    return await this.fireStorage.storage
      .ref('/portadas/' + filename)
      .getDownloadURL()
      .then((url: string) => url);
  }
}
