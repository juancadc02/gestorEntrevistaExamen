import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Candidatos } from '../Modelos/candidatos';
import { Entrevistas } from '../Modelos/entrevistas';
import { Puesto } from '../Modelos/puesto';

@Injectable({
  providedIn: 'root'
})
export class EntrevistaService {

  constructor(private db: Firestore) { }


  añadirEntrevista(entrevista: Entrevistas) {
    const referencia = collection(this.db, 'entrevistas');
    return addDoc(referencia, entrevista);
  }

  //Metodo que devuelve un objeto por el id de firebase
  mostrarPorId(nombreColeccion: string, idA: string) {
    const collecionRef = doc(this.db, nombreColeccion + "/" + idA);
    return docData(collecionRef, { idField: "id" }) as Observable<any>;
  }

  //Metodo que medifica candidatos a la coleccion candidatos de firebase 
  modificarEntrevista(objeto: any, nombreColeccion: string, id: string) {
    const collectionRef = doc(this.db, nombreColeccion + "/" + id);
    return setDoc(collectionRef, objeto);
  }
   //Metodo que elimina entrevistas a la coleccion entrevistas de firebase 
   eliminarEntrevista(objeto: any, nombreColeccion: string) {
    const collectionRef = doc(this.db, nombreColeccion + "/" + objeto.id);
    return deleteDoc(collectionRef);
  }
  //Metodo para listar las entrevistas y mostrarlas
  listarEntrevistadores(): Observable<Entrevistas[]> {
    const ref = collection(this.db, 'entrevistas')
    return collectionData(ref, { idField: 'id' }) as Observable<Entrevistas[]>
  }
  //Metodo para listar los candidatos y mostrarlos 
  listarCandidatos(): Observable<Candidatos[]> {
    const ref = collection(this.db, 'candidatos')
    return collectionData(ref, { idField: 'id' }) as Observable<Candidatos[]>
  }
  //Metodo para listar los puestos de trabajo y mostrarlos 
  listarPuestos(): Observable<Puesto[]> {
    const ref = collection(this.db, 'puestos')
    return collectionData(ref, { idField: 'id' }) as Observable<Puesto[]>
  }
}
