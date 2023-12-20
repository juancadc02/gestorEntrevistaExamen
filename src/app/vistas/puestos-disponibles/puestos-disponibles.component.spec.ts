import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuestosDisponiblesComponent } from './puestos-disponibles.component';

describe('PuestosDisponiblesComponent', () => {
  let component: PuestosDisponiblesComponent;
  let fixture: ComponentFixture<PuestosDisponiblesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuestosDisponiblesComponent]
    });
    fixture = TestBed.createComponent(PuestosDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
