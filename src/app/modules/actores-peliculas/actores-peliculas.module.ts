import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActoresPeliculasRoutingModule } from './actores-peliculas-routing.module';
//components
import { ActoresPeliculasComponent } from 'src/app/pages/actores-peliculas/actores-peliculas.component';
import { DetalleActorComponent } from 'src/app/components/detalle-actor/detalle-actor.component';
import { DetallePaisComponent } from 'src/app/components/detalle-pais/detalle-pais.component';
import { TablaPeliculaFijaComponent } from 'src/app/components/tabla-pelicula-fija/tabla-pelicula-fija.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

@NgModule({
  declarations: [
    ActoresPeliculasComponent,
    DetalleActorComponent,
    DetallePaisComponent,
    TablaPeliculaFijaComponent,
  ],
  imports: [
    CommonModule,
    ActoresPeliculasRoutingModule,
    SharedComponentsModule,
  ],
  exports: [SharedComponentsModule],
})
export class ActoresPeliculasModule {}
