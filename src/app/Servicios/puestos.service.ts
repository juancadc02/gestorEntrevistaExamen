import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, setDoc } from '@angular/fire/firestore';
import { Puesto } from '../Modelos/puesto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuestosService {

  constructor(private db:Firestore) { }

    //Metodo que añade en la coleccion candidatos a un objeto candidatos.
    añadirPuesto(puesto:Puesto){
      const referen = collection(this.db,'puestos');
      return addDoc(referen,puesto);
    }
    //Metodo que devuelve un objeto por el id de firebase
    mostrarPorId(nombreColeccion: string, idA:string){
      const collecionRef = doc(this.db, nombreColeccion+"/"+idA);
      return docData(collecionRef, {idField: "id"}) as Observable<any>;
    }
    //Metodo que elimina puestos de la coleccion puestos de firebase 
    eliminarPuesto(objeto: any, nombreColeccion: string) {
      const collectionRef = doc(this.db, nombreColeccion + "/" + objeto.id);
      return deleteDoc(collectionRef);
    }
    //Metodo que medifica puestos de la coleccion puestos de firebase 
    modificarPuesto(objeto: any, nombreColeccion: string, id: string) {
      const collectionRef = doc(this.db, nombreColeccion + "/" + id);
      return setDoc(collectionRef, objeto);
    }
    //Metodo que devuelve una coleccion de puestos de firebase
    listarPuestos(): Observable<Puesto[]> {
      const ref = collection(this.db, 'puestos')
      return collectionData(ref, { idField: 'id' }) as Observable<Puesto[]>
    }
  
}
