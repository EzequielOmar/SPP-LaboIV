export const dbName_Peliculas = 'peliculas';

export interface E_tipoPelicula {
  terror: 'Terror';
  comedia: 'Comedia';
  amor: 'Amor';
  accion: 'Acción';
  otro: 'Otro';
}

export interface Pelicula {
  nombre: String;
  tipo: E_tipoPelicula;
  fecha_estreno: String;
  cantidad_publico: Number;
  foto_path: String;
}
