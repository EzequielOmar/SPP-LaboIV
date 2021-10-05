export const dbName_Movies = 'peliculas';

export interface E_tipeMovie {
  terror: 'Terror';
  comedia: 'Comedia';
  amor: 'Amor';
  accion: 'Acción';
  otro: 'Otro';
}

export interface Movie {
  id: string;
  movie: {
    nombre: string;
    tipo: E_tipeMovie;
    resumen: string;
    fecha_estreno: string;
    cantidad_publico: Number;
    foto_path: string;
    actores: Array<string>;
    realUrl: string;
  };
}
//sumar array actores
