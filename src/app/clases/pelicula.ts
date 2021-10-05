export const dbName_Movies = 'peliculas';

export interface E_tipeMovie {
  terror: 'Terror';
  comedia: 'Comedia';
  amor: 'Amor';
  accion: 'Acción';
  otro: 'Otro';
}

export interface Movie {
  nombre: string;
  tipo: E_tipeMovie;
  fecha_estreno: string;
  cantidad_publico: Number;
  foto_path: string;
}
