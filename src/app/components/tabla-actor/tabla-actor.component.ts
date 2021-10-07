import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor, dbName_Actors } from 'src/app/clases/actor';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss'],
})
export class TablaActorComponent implements OnInit {
  @Input() actors!: Array<Actor>;
  @Output() actorSelected: EventEmitter<Actor> = new EventEmitter<Actor>();
  constructor() {}

  ngOnInit(): void {}

  selectActor(actor: Actor) {
    this.actorSelected?.emit(actor);
  }
}
