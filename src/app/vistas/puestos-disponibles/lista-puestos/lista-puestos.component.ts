import { Component } from '@angular/core';
import { Puesto } from 'src/app/Modelos/puesto';
import { PuestosService } from 'src/app/Servicios/puestos.service';

@Component({
  selector: 'app-lista-puestos',
  templateUrl: './lista-puestos.component.html',
  styleUrls: ['./lista-puestos.component.css']
})
export class ListaPuestosComponent {

  listaPuestos :Puesto[]=[];

  constructor(private servicioPuestos: PuestosService){}
 
  ngOnInit(){
    this.servicioPuestos.listarPuestos().subscribe(res=>this.listaPuestos=res);
  }
  confirmarEliminar(puesto: Puesto) {
    const confirmacion = window.confirm(`¿Estás seguro de que deseas eliminar el puesto con id ${puesto.id}?`);
    if (confirmacion) {
      this.eliminarPuesto(puesto);
    }
  }
  //Metodo que elimina un cliente
  eliminarPuesto(puesto: Puesto) {
    //Llamamos al metodo de eliminar del servicioClientes.
    this.servicioPuestos.eliminarPuesto(puesto, "puestos");
  }
}
