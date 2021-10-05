import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Country, dbName_Countries } from 'src/app/clases/pais';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss'],
})
export class TablaPaisesComponent implements OnInit {
  countries: Array<Country> = [];
  @Output() countrySelected: EventEmitter<Country> =
    new EventEmitter<Country>();
  constructor(private db: DbService) {
    this.db.getObserver(dbName_Countries).onSnapshot((snap) => {
      this.countries = [];
      snap.forEach((child: any) => {
        this.countries.push(child.data() as Country);
      });
    });
  }

  ngOnInit(): void {}

  selectCountry(country: Country) {
    this.countrySelected?.emit(country);
  }
}
