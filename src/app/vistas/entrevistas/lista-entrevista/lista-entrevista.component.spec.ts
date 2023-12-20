import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEntrevistaComponent } from './lista-entrevista.component';

describe('ListaEntrevistaComponent', () => {
  let component: ListaEntrevistaComponent;
  let fixture: ComponentFixture<ListaEntrevistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaEntrevistaComponent]
    });
    fixture = TestBed.createComponent(ListaEntrevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
