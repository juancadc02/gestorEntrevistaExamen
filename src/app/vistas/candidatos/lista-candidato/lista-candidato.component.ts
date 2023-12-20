import { Component } from '@angular/core';
import { Candidatos } from 'src/app/Modelos/candidatos';
import { CandidatosService } from 'src/app/Servicios/candidatos.service';

@Component({
  selector: 'app-lista-candidato',
  templateUrl: './lista-candidato.component.html',
  styleUrls: ['./lista-candidato.component.css']
})
export class ListaCandidatoComponent {

  listaCandidatos: Candidatos[] = [];

  constructor(private servicioCandidato: CandidatosService) { }

  ngOnInit() {
    this.servicioCandidato.listarCandidatos().subscribe(res => this.listaCandidatos = res);
  }
  //Metodo de confirmacion de eliminar un cliente.
  confirmarEliminar(candidato: Candidatos) {
    const confirmacion = window.confirm(`¿Estás seguro de que deseas eliminar el candidato con correo ${candidato.mailCandidato}?`);
    if (confirmacion) {
      this.eliminarUsuario(candidato);
    }
  }
  //Metodo que elimina un cliente
  eliminarUsuario(candidato: Candidatos) {
    //Llamamos al metodo de eliminar del servicioClientes.
    this.servicioCandidato.eliminarCandidato(candidato, "candidatos");
  }

}
