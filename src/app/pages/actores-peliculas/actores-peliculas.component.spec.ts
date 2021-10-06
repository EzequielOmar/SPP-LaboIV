import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActoresPeliculasComponent } from './actores-peliculas.component';

describe('ActoresPeliculasComponent', () => {
  let component: ActoresPeliculasComponent;
  let fixture: ComponentFixture<ActoresPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActoresPeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActoresPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
