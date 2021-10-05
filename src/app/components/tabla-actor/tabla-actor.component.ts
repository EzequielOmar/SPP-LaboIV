import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actor, dbName_Actors } from 'src/app/clases/actor';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss'],
})
export class TablaActorComponent implements OnInit {
  actors: Array<Actor> = [];
  @Output() actorSelected: EventEmitter<Actor> = new EventEmitter<Actor>();
  constructor(private db: DbService) {
    this.db.getObserver(dbName_Actors).onSnapshot((snap) => {
      this.actors = [];
      snap.forEach((child: any) => {
        this.actors.push({ id: child.id, actor: child.data() });
      });
    });
  }

  ngOnInit(): void {}

  selectActor(actor: Actor) {
    this.actorSelected?.emit(actor);
  }
}
