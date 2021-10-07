import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaActorComponent } from 'src/app/components/tabla-actor/tabla-actor.component';
import { NavComponent } from 'src/app/components/nav/nav.component';

@NgModule({
  declarations: [TablaActorComponent, NavComponent],
  imports: [CommonModule],
  exports: [TablaActorComponent, NavComponent],
})
export class SharedComponentsModule {}
