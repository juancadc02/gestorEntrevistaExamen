import { Component } from '@angular/core';
import { Entrevistas } from 'src/app/Modelos/entrevistas';
import { EntrevistaService } from 'src/app/Servicios/entrevista.service';

@Component({
  selector: 'app-lista-entrevista',
  templateUrl: './lista-entrevista.component.html',
  styleUrls: ['./lista-entrevista.component.css']
})
export class ListaEntrevistaComponent {

  constructor(private servicioEntrevista: EntrevistaService) { }

  listaEntrevista: Entrevistas[] = [];
  ngOnInit() {
    this.servicioEntrevista.listarEntrevistadores().subscribe(res => this.listaEntrevista = res);
  }

   //Metodo de confirmacion de eliminar un cliente.
   confirmarEliminar(entrevistas: Entrevistas) {
    const confirmacion = window.confirm(`¿Estás seguro de que deseas eliminar la entrevista con id ${entrevistas.id}?`);
    if (confirmacion) {
      this.eliminarEntrevista(entrevistas);
    }
  }
  //Metodo que elimina un cliente
  eliminarEntrevista(entrevista: Entrevistas) {
    //Llamamos al metodo de eliminar del servicioClientes.
    this.servicioEntrevista.eliminarEntrevista(entrevista, "entrevistas");
  }
}
