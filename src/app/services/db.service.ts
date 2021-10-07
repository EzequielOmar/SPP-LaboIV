import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  CollectionReference,
} from '@angular/fire/compat/firestore';
import { Actor, dbName_Actors } from '../clases/actor';
import { Country, dbName_Countries } from '../clases/pais';
import { dbName_Movies, Movie } from '../clases/pelicula';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  errorMessage = 'Error interno. Operación no realizada.';
  notExist = 'La busqueda no arrojó resultados.';
  constructor(private db: AngularFirestore) {}

  /**
   * Retorna la referencia a la coleccion solicitada
   * @param dbname Nombre de coleccion
   * @returns
   */
  getObserver(dbname: string): CollectionReference {
    return this.db.firestore.collection(dbname);
  }

  /*
   * Guarda (o sobreescribe si existe) el dato
   * en el docName(id) del database ingresado.
   * @param database nombre de database (si no existe se crea)
   * @param data datos a guardar en documento (puede ser cualquier objeto)
   * * Exito -> retorna el id del doc creado (generado internamente) *
   * * Error -> imprime error, y retorna mensaje para imprimir en pantalla *
   */
  set = async (database: string, data: any) => {
    await this.db
      .collection(database)
      .add(data)
      .then((res) => res.id)
      .catch((error) => {
        console.log(error);
        throw new Error(this.errorMessage);
      });
  };

  /**
   * Busca en la coleccion paises por el pais con el nombre pasado por parametro
   * @param name Nombre del pais a buscar en la base de datos
   * @returns Retorna el pais en objeto Country o null de no encontrarse el pais.
   */
  getCountryByName = async (name: string) => {
    let pais = null;
    await this.db.firestore
      .collection(dbName_Countries)
      .where('nombre', '==', name)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc: any) => {
          if (!doc.empty) {
            pais = doc.data() as Country;
          }
        });
      });
    return pais;
  };

  /**
   * Busca en la coleccion peliculas por el listado de peliculas del actor correspondiente
   * @param id id del actor
   * @returns Retorna un array con las Movies correspondientes, o vacío
   */
  getMoviesByActorId = async (id: string) => {
    let movies: Array<Movie> = [];
    await this.db.firestore
      .collection(dbName_Movies)
      .where('actores', 'array-contains', id)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc: any) => {
          movies.push({ id: doc.id, movie: doc.data() });
        });
      });
    return movies;
  };

  /**
   * Busca en la coleccion actores por el listado de actore del actor correspondiente
   * @param id_actors array de los id de los actores
   * @returns Retorna un array con los actores, o null si corresponde
   */
  getActorsOfMovie = async (id_actors: Array<string>) => {
    let actors: Array<Actor> = [];
    if (!id_actors) {
      return null;
    }
    id_actors.forEach((id) => {
      this.db.firestore
        .collection(dbName_Actors)
        .doc(id)
        .get()
        .then((doc:any) => {
          actors.push({id:doc.id,actor:doc.data()});
        });
    });
    return actors;
  };
}
