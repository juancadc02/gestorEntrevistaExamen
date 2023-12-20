import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, setDoc } from '@angular/fire/firestore';
import { Candidatos } from '../Modelos/candidatos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/*
Servicio que incluye los metodos necesarios para el componente candidatos.
*/
export class CandidatosService {

  constructor(private db :Firestore) { }

  //Metodo que añade en la coleccion candidatos a un objeto candidatos.
  añadirCandidato(candidato:Candidatos){
    const referencia=doc(this.db,'candidatos',candidato.dniCandidato);
    return setDoc(referencia,candidato);
  }
  //Metodo que devuelve un objeto por el id de firebase
  mostrarPorId(nombreColeccion: string, idA:string){
    const collecionRef = doc(this.db, nombreColeccion+"/"+idA);
    return docData(collecionRef, {idField: "id"}) as Observable<any>;
  }
  //Metodo que elimina candidatos a la coleccion citas de firebase 
  eliminarCandidato(objeto: any, nombreColeccion: string) {
    const collectionRef = doc(this.db, nombreColeccion + "/" + objeto.id);
    return deleteDoc(collectionRef);
  }
  //Metodo que medifica candidatos a la coleccion candidatos de firebase 
  modificarCandidatos(objeto: any, nombreColeccion: string, id: string) {
    const collectionRef = doc(this.db, nombreColeccion + "/" + id);
    return setDoc(collectionRef, objeto);
  }
  //Metodo que devuelve una coleccion de candidatos de firebase
  listarCandidatos(): Observable<Candidatos[]> {
    const ref = collection(this.db, 'candidatos')
    return collectionData(ref, { idField: 'id' }) as Observable<Candidatos[]>
  }

}
