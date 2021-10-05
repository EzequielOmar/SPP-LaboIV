import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaActoresComponent } from './pages/alta-actores/alta-actores.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  { path: 'home', component: BusquedaComponent },
  { path: 'actor/alta', component: AltaActoresComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
