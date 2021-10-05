import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  CollectionReference,
} from '@angular/fire/compat/firestore';

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
}
