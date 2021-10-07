import { Component } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor, dbName_Actors } from 'src/app/clases/actor';
import { dbName_Movies, Movie } from 'src/app/clases/pelicula';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.scss'],
})
export class AltaPeliculaComponent {
  actors: Array<Actor> = [];
  form: FormGroup;
  sended: Boolean = false;
  spinner: Boolean = false;
  respuesta: string = '';
  basePath_covers = '/portadas';
  file?: File;
  task?: AngularFireUploadTask;
  fullActorsList: Array<Actor> = [];
  constructor(
    private fb: FormBuilder,
    private db: DbService,
    private fireStorage: AngularFireStorage
  ) {
    /*FORMULARIO*/
    this.form = this.fb.group({
      // lo interpreto como views
      // cantidad_publico: ['', Validators.required],
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      resumen: ['', Validators.required],
      fecha_estreno: ['', Validators.required],
      foto_path: ['', Validators.required],
      actores: this.fb.array([]),
    });
    /*LISTA DE ACTORES*/
    this.db.getObserver(dbName_Actors).onSnapshot((snap) => {
      this.fullActorsList = [];
      snap.forEach((child: any) => {
        this.fullActorsList.push({ id: child.id, actor: child.data() });
      });
    });
  }

  /**Agrega el actor a la lista del FormField */
  getActor(event: Actor) {
    this.form.controls['actores'].value.push(event.id);
    this.actors.push(event);
  }

  /**
   * Guarda el archivo temporal, y settea el FormField con el nombre del archivo
   * @param event Recibe el evento de cambio en el input de imagen
   */
  getImage(event: any) {
    this.file = event.target.files[0];
    this.form.controls['foto_path'].setValue(event.target.files[0]?.name ?? '');
  }

  /**
   * Si el formulario es válido:
   * guarda en firebase storage el archivo /peliculas/name.ext
   * genera el objeto Movie con el url a la imagen listo para mostrar
   * guarda el objeto en la coleccion peliculas en firestore
   */
  async send() {
    this.sended = true;
    if (this.form.valid) {
      this.spinner = true;
      const filePath = `${this.basePath_covers}/${this.form.controls['foto_path'].value}`;
      this.task = this.fireStorage.upload(filePath, this.file);
      let movie: Movie = { id: '', movie: this.form.value };
      await this.db
        .set(dbName_Movies, movie.movie)
        .then(() => {
          this.showResponse('Cargado correctamente');
        })
        .catch((error) => {
          this.showResponse(error);
        })
        .finally(() => {
          this.spinner = false;
        });
    }
  }

  private showResponse(text: string) {
    this.respuesta = text;
    setTimeout(() => {
      this.respuesta = '';
    }, 3000);
  }
}
