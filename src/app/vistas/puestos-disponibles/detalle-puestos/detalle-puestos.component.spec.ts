import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePuestosComponent } from './detalle-puestos.component';

describe('DetallePuestosComponent', () => {
  let component: DetallePuestosComponent;
  let fixture: ComponentFixture<DetallePuestosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePuestosComponent]
    });
    fixture = TestBed.createComponent(DetallePuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
