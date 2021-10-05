import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Actor, dbName_Actors } from 'src/app/clases/actor';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.scss'],
})
export class AltaActoresComponent {
  form: FormGroup;
  sended: Boolean = false;
  spinner: Boolean = false;
  respuesta: string = '';
  constructor(private fb: FormBuilder, private db: DbService) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      biografia: [''],
      nacimiento: ['', Validators.required],
      pais: ['', Validators.required],
      sexo: ['', Validators.required],
    });
  }

  send() {
    this.sended = true;
    if (this.form.valid) {
      this.spinner = true;
      let actor: Actor = this.form.value as Actor;
      this.db
        .set(dbName_Actors, actor)
        .then(() => {
          this.showResponse('Cargado correctamente');
        })
        .catch((error) => {
          this.showResponse(error);
        })
        .finally(() => {
          this.spinner = false;
        });
    }
  }

  private showResponse(text: string) {
    this.respuesta = text;
    setTimeout(() => {
      this.respuesta = '';
    }, 3000);
  }
}
