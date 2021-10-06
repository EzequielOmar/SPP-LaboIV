import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.scss'],
})
export class DetalleActorComponent implements OnInit {
  @Input() actor?: Actor;
  constructor() {}

  ngOnInit(): void {}

  getEdad(fecha: any): string {
    if (fecha) {
      let años =
        (new Date().getTime() - new Date(fecha).getTime()) /
        (1000 * 3600 * 24 * 365);
      return Math.floor(años).toString();
    }
    return '';
  }
}
