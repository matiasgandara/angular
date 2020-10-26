import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaAboutComponent } from './pelicula-about.component';

describe('PeliculaAboutComponent', () => {
  let component: PeliculaAboutComponent;
  let fixture: ComponentFixture<PeliculaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculaAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
