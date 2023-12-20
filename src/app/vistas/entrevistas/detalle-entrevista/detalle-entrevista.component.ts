import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidatos } from 'src/app/Modelos/candidatos';
import { Entrevistas } from 'src/app/Modelos/entrevistas';
import { Puesto } from 'src/app/Modelos/puesto';
import { EntrevistaService } from 'src/app/Servicios/entrevista.service';
import { MensajeService } from 'src/app/Servicios/mensaje.service';

@Component({
  selector: 'app-detalle-entrevista',
  templateUrl: './detalle-entrevista.component.html',
  styleUrls: ['./detalle-entrevista.component.css']
})
export class DetalleEntrevistaComponent {

  //Variables 
  id: string = '';
  entreForm: FormGroup;
  textoTitulo: string = 'Nuevo Entrevista';
  botonTexto: string = 'Añadir Entrevista';
  mensaje: string = '';
  entrevistas: Entrevistas = { id: '', fechaEntrevista: new Date(), candidatoEntrevista: '', puestoEntrevista: '',realizada:false};
  listaCandidatos: Candidatos[] = [];
  listaPuestosDeTrabajo:Puesto[]=[];
  constructor(private servicioEntrevista: EntrevistaService,
    private forms: FormBuilder,
    private router: Router,
    private servicioMensaje: MensajeService,
    private route: ActivatedRoute) {
    this.entreForm = this.forms.group({
      fechaEntrevista: [new Date().toISOString().split('T')[0], Validators.required],
      candidatoEntrevista: ['', Validators.required],
      puestoEntrevista: ['', Validators.required],
      realizada:[]

    });
  }
  ngOnInit() {
    this.servicioEntrevista.listarCandidatos().subscribe(res => this.listaCandidatos = res);
    this.servicioEntrevista.listarPuestos().subscribe(res=>this.listaPuestosDeTrabajo=res);
    if (this.route.snapshot.paramMap.get("id")) {
      this.textoTitulo = 'Modificar Entrevista';
      this.id = this.route.snapshot.paramMap.get("id")!;
      this.botonTexto = "Modificar Entrevista";
      this.servicioEntrevista.mostrarPorId('entrevistas', this.id).subscribe(
        (res: any) => this.entrevistas = res);
    }
    this.servicioMensaje.mensaje$.subscribe((mensaje) => {
      if (mensaje) {
        this.mensaje = mensaje;
      }
    });
  }

  enviarDatos() {
    if (this.id) {
      this.modificarEntrevista();
    } else {
      this.añadirEntrevista();
    }
  }

  añadirEntrevista() {
    console.log(this.entreForm.valid);
    if (this.entreForm.valid) {
      const nuevaEntrevista = this.entreForm.value;
      this.servicioEntrevista.añadirEntrevista(nuevaEntrevista)
        .then(() => {
          console.log('Entrevita agregada correctamente');
          this.entreForm.reset();
          this.servicioMensaje.enviarMensaje('Entrevista añadida correctamente.Redirigiendo a listado de entrevistas ...');
          //Redirigimos al listado de juegos 2 segundos despues de añadirlo.
          setTimeout(() => {
            // Redirigir a otro sitio
            this.router.navigate(['/entrevistas']);
          }, 2000)
        })
        .catch(error => {
          console.error('Error al agregar la entrevista:', error);
        });
    }
  }

  modificarEntrevista() {

    this.servicioEntrevista.modificarEntrevista(this.entrevistas, 'entrevistas', this.id!).
      then(() => console.log("Se guardo correctamente")).
      catch(() => console.log("No se guardo"));
    this.servicioMensaje.enviarMensaje('Entrevista actualizada correctamente. Redirigiendo a listado de Entrevista ...');
    //Redirigimos al listado de juegos 2 segundos despues de añadirlo.
    setTimeout(() => {
      // Redirigir a otro sitio
      this.router.navigate(['/entrevistas']);
    }, 2000)
  }
}

