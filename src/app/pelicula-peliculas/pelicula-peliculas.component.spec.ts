import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaPeliculasComponent } from './pelicula-peliculas.component';

describe('PeliculaPeliculasComponent', () => {
  let component: PeliculaPeliculasComponent;
  let fixture: ComponentFixture<PeliculaPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculaPeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
