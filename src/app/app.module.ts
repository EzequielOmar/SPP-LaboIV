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

@NgModule({
  declarations: [AppComponent, BusquedaComponent, ErrorComponent, TablaPeliculaComponent, DetallePeliculaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
