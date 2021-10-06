import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPeliculaFijaComponent } from './tabla-pelicula-fija.component';

describe('TablaPeliculaFijaComponent', () => {
  let component: TablaPeliculaFijaComponent;
  let fixture: ComponentFixture<TablaPeliculaFijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPeliculaFijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPeliculaFijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
