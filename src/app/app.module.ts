import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//routing - app
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//firestore
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
//modules
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { ErrorComponent } from './pages/error/error.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { AltaActoresComponent } from './pages/alta-actores/alta-actores.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerComponent } from './widgets/date-picker/date-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaActorComponent } from './components/tabla-actor/tabla-actor.component';
import { AltaPeliculaComponent } from './pages/alta-pelicula/alta-pelicula.component';
import { ActoresPeliculasComponent } from './pages/actores-peliculas/actores-peliculas.component';
import { DetalleActorComponent } from './components/detalle-actor/detalle-actor.component';
import { DetallePaisComponent } from './components/detalle-pais/detalle-pais.component';
import { TablaPeliculaFijaComponent } from './components/tabla-pelicula-fija/tabla-pelicula-fija.component';
//material

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    ErrorComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    AltaActoresComponent,
    TablaPaisesComponent,
    DatePickerComponent,
    TablaActorComponent,
    AltaPeliculaComponent,
    ActoresPeliculasComponent,
    DetalleActorComponent,
    DetallePaisComponent,
    TablaPeliculaFijaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    NoopAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
