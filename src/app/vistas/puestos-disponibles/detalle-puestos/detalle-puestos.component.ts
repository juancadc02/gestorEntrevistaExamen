import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Puesto } from 'src/app/Modelos/puesto';
import { MensajeService } from 'src/app/Servicios/mensaje.service';
import { PuestosService } from 'src/app/Servicios/puestos.service';

@Component({
  selector: 'app-detalle-puestos',
  templateUrl: './detalle-puestos.component.html',
  styleUrls: ['./detalle-puestos.component.css']
})
export class DetallePuestosComponent {

  //Variables 
  puestoForm: FormGroup;
  textoTitulo: string = 'Nuevo Puesto de Trabajo';
  botonTexto: string = 'Añadir puesto';
  mensaje: string = '';
  id: string = '';
  puestos: Puesto = { id: '', nombrePuesto: '', empresa: '',puestoDisponible:false };

  constructor(private servicioPuestos: PuestosService,
    private forms: FormBuilder,
    private servicioMensaje: MensajeService,
    private route: ActivatedRoute,
    private router: Router) {

    this.puestoForm = this.forms.group({
      nombrePuesto: ['', Validators.required],
      empresa: ['', Validators.required],
      puestoDisponible:[]
    });
  }


  ngOnInit() {

    if (this.route.snapshot.paramMap.get("id")) {
      this.textoTitulo = 'Modificar Puesto';
      this.id = this.route.snapshot.paramMap.get("id")!;
      this.botonTexto = "Modificar Puesto";
      this.servicioPuestos.mostrarPorId('puestos', this.id).subscribe(
        (res: any) => this.puestos = res);
    }
    this.servicioMensaje.mensaje$.subscribe((mensaje) => {
      if (mensaje) {
        this.mensaje = mensaje;
      }
    });
  }
  enviarDatos() {

    if (this.id) {
      this.modificarPuesto();
    } else {
      this.añadirPuesto();
    }
  }
  añadirPuesto() {
    console.log(this.puestoForm.valid);
    if (this.puestoForm.valid) {
      const nuevoPuesto = this.puestoForm.value;
      this.servicioPuestos.añadirPuesto(nuevoPuesto)
        .then(() => {
          console.log('Puesto agregado correctamente');
          this.puestoForm.reset();
          this.servicioMensaje.enviarMensaje('Puesto de trabajo añadido correctamente.Redirigiendo a listado de puestos ...');
          //Redirigimos al listado de juegos 2 segundos despues de añadirlo.
          setTimeout(() => {
            // Redirigir a otro sitio
            this.router.navigate(['/puestos']);
          }, 2000)
        })
        .catch(error => {
          console.error('Error al agregar el puesto:', error);
        });
    }
  }
  modificarPuesto() {
    this.servicioPuestos.modificarPuesto(this.puestos, 'puestos', this.id!).
      then(() => console.log("Se guardo correctamente")).
      catch(() => console.log("No se guardo"));
    this.servicioMensaje.enviarMensaje('Puesto de trabajo actualizado correctamente. Redirigiendo a listado de puestos ...');
    //Redirigimos al listado de juegos 2 segundos despues de añadirlo.
    setTimeout(() => {
      // Redirigir a otro sitio
      this.router.navigate(['/puestos']);
    }, 2000)
  }
}


