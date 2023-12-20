import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CandidatosComponent } from './vistas/candidatos/candidatos.component';
import { EntrevistasComponent } from './vistas/entrevistas/entrevistas.component';
import { PuestosDisponiblesComponent } from './vistas/puestos-disponibles/puestos-disponibles.component';
import { DetalleCandidatoComponent } from './vistas/candidatos/detalle-candidato/detalle-candidato.component';
import { ListaCandidatoComponent } from './vistas/candidatos/lista-candidato/lista-candidato.component';
import { DetalleEntrevistaComponent } from './vistas/entrevistas/detalle-entrevista/detalle-entrevista.component';
import { ListaEntrevistaComponent } from './vistas/entrevistas/lista-entrevista/lista-entrevista.component';
import { DetallePuestosComponent } from './vistas/puestos-disponibles/detalle-puestos/detalle-puestos.component';
import { ListaPuestosComponent } from './vistas/puestos-disponibles/lista-puestos/lista-puestos.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MenuComponent } from './core/menu/menu.component';
import { PaginaInicioComponent } from './vistas/pagina-inicio/pagina-inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CandidatosComponent,
    EntrevistasComponent,
    PuestosDisponiblesComponent,
    DetalleCandidatoComponent,
    ListaCandidatoComponent,
    DetalleEntrevistaComponent,
    ListaEntrevistaComponent,
    DetallePuestosComponent,
    ListaPuestosComponent,
    MenuComponent,
    PaginaInicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp({"projectId":"proyecto-examen-bb431","appId":"1:544567479956:web:a81ba10453752e51de2e81","storageBucket":"proyecto-examen-bb431.appspot.com","apiKey":"AIzaSyDVLKaC6arjq9vLz1OAZrK8bFAfRHCAiF4","authDomain":"proyecto-examen-bb431.firebaseapp.com","messagingSenderId":"544567479956","measurementId":"G-PGJ26954RD"})),
    provideFirestore(() => getFirestore()),
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
