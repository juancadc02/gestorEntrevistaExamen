import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCandidatoComponent } from './lista-candidato.component';

describe('ListaCandidatoComponent', () => {
  let component: ListaCandidatoComponent;
  let fixture: ComponentFixture<ListaCandidatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaCandidatoComponent]
    });
    fixture = TestBed.createComponent(ListaCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
