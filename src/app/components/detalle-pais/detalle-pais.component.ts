import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/clases/pais';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.scss'],
})
export class DetallePaisComponent implements OnInit {
  @Input() pais?: Country;
  constructor() {}

  ngOnInit(): void {}
}
