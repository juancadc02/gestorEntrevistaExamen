import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicioComponent } from './vistas/pagina-inicio/pagina-inicio.component';
import { CandidatosComponent } from './vistas/candidatos/candidatos.component';
import { DetalleCandidatoComponent } from './vistas/candidatos/detalle-candidato/detalle-candidato.component';
import { EntrevistasComponent } from './vistas/entrevistas/entrevistas.component';
import { DetalleEntrevistaComponent } from './vistas/entrevistas/detalle-entrevista/detalle-entrevista.component';
import { PuestosDisponiblesComponent } from './vistas/puestos-disponibles/puestos-disponibles.component';
import { DetallePuestosComponent } from './vistas/puestos-disponibles/detalle-puestos/detalle-puestos.component';

const routes: Routes = [
  {path:'',component:PaginaInicioComponent},
  {path:'candidatos',component:CandidatosComponent},
  {path:'candidatos/nuevo',component:DetalleCandidatoComponent},
  {path:'candidatos/:id',component:DetalleCandidatoComponent},
  {path:'entrevistas',component:EntrevistasComponent},
  {path:'entrevistas/nuevo',component:DetalleEntrevistaComponent},
  {path:'entrevistas/:id',component:DetalleEntrevistaComponent},
  {path:'puestos',component:PuestosDisponiblesComponent},
  {path:'puestos/nuevo',component:DetallePuestosComponent},
  {path:'puestos/:id',component:DetallePuestosComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
