import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActoresPeliculasComponent } from 'src/app/pages/actores-peliculas/actores-peliculas.component';

const routes: Routes = [
  { path: '', component: ActoresPeliculasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActoresPeliculasRoutingModule { }
