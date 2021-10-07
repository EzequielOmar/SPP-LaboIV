import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  dropMobileMenu: Boolean = false;
  dropTogle: Boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToBusqueda() {
    this.router.navigate(['home']);
  }

  goToActorPelicula() {
    this.router.navigate(['actor/actorpelicula']);
  }

  goToAltaActor() {
    this.router.navigate(['actor/alta']);
  }

  goToAltaPelicula() {
    this.router.navigate(['pelicula/alta']);
  }
}
