export const dbName_Actors = 'actores';

export interface Actor {
  id: string;
  actor: {
    nombre: string;
    apellido: string;
    biografia: string;
    nacimiento: string;
    pais: string;
    sexo: string;
  };
}
