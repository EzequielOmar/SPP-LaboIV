import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Movie } from '../clases/pelicula';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private fireStorage: AngularFireStorage) {}

  /**
   * LLama a la funcion getRealUrl, y setea el campo m.movie.realUrl
   * con el url a la imagen en google filestorage
   */
  getMoviePicUrl(movies: Array<Movie>) {
    movies.forEach((m) => {
      this.getRealUrl(m.movie.foto_path).then((url: string) => {
        m.movie.realUrl = url;
      });
    });
  }

  private async getRealUrl(filename: string) {
    return await this.fireStorage.storage
      .ref('/portadas/' + filename)
      .getDownloadURL()
      .then((url: string) => url);
  }
}
