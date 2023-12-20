import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidatos } from 'src/app/Modelos/candidatos';
import { CandidatosService } from 'src/app/Servicios/candidatos.service';
import { MensajeService } from 'src/app/Servicios/mensaje.service';

@Component({
  selector: 'app-detalle-candidato',
  templateUrl: './detalle-candidato.component.html',
  styleUrls: ['./detalle-candidato.component.css']
})
export class DetalleCandidatoComponent {

  //Variables 
  textoTitulo:string='Nuevo Candidato';
  botonEnviar:string='Añadir Candidato';
  mensaje:string='';
  candiForm:FormGroup;
  id:string='';
  candidatos:Candidatos ={id:'',nombreApellidosCandidato:'',dniCandidato:'',direccionCandidato:'',telefonoCandidato:'',mailCandidato:'',fechaNacimientoCandidato: new Date()};

  constructor(private forms: FormBuilder,
    private servicioCandidatos: CandidatosService,
    private servicioMensaje: MensajeService,
    private router : Router,
    private route :ActivatedRoute){

    this.candiForm = this.forms.group({
      nombreApellidosCandidato: ['', Validators.required],
      dniCandidato:['',Validators.required],
      direccionCandidato: ['', Validators.required],
      telefonoCandidato: ['', Validators.required],
      mailCandidato:['',Validators.required],
      fechaNacimientoCandidato: [new Date().toISOString().split('T')[0], Validators.required]
    });
  }

  ngOnInit(){
    if (this.route.snapshot.paramMap.get("id")) {
      this.textoTitulo = 'Modificar Candidado';
      this.id = this.route.snapshot.paramMap.get("id")!;
      this.botonEnviar = "Modificar Candidado";
      this.servicioCandidatos.mostrarPorId('candidatos', this.id).subscribe(
        (res: any) => this.candidatos = res);
    }
    this.servicioMensaje.mensaje$.subscribe((mensaje) => {
      if (mensaje) {
        this.mensaje = mensaje;
      }
    });
  }

  enviarDatos(){

    if(this.id){
      this.modificarCandidato();
    }else{
      this.agregarCandidato();
    }
  }

    //Metodo que añade uncandidato,muestra mensaje y redirige a la pagina de candidato
    agregarCandidato() {
      console.log(this.candiForm.valid);
      if (this.candiForm.valid) {
        const nuevoCandidato = this.candiForm.value;
        this.servicioCandidatos.añadirCandidato(nuevoCandidato)
          .then(() => {
            console.log('Candidato agregado correctamente');
            this.candiForm.reset();
            this.servicioMensaje.enviarMensaje('Candidato añadido correctamente.Redirigiendo a listado de candidatos ...');
            //Redirigimos al listado de juegos 2 segundos despues de añadirlo.
            setTimeout(() => {
              // Redirigir a otro sitio
              this.router.navigate(['/candidatos']);
            }, 2000)
          })
          .catch(error => {
            console.error('Error al agregar el candidato:', error);
          });
      }
    }
  
    //Metodo que modifica un candidato,muestra mensaje y redirige a la pagina candidatos
    modificarCandidato() {
      this.servicioCandidatos.modificarCandidatos(this.candidatos, 'candidatos', this.id!).
        then(() => console.log("Se guardo correctamente")).
        catch(() => console.log("No se guardo"));
      this.servicioMensaje.enviarMensaje('Candidato actualizado correctamente. Redirigiendo a listado de candidatos ...');
      //Redirigimos al listado de juegos 2 segundos despues de añadirlo.
      setTimeout(() => {
        // Redirigir a otro sitio
        this.router.navigate(['/candidatos']);
      }, 2000)
    }
}
