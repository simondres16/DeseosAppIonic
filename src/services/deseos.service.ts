import { Injectable } from '@angular/core';
import { Lista } from '../models/index';

@Injectable()
export class DeseosService {

  lista : Lista[] = []

  constructor(){
    this.cargarStorage();
  }

  agregarLista(lista:Lista){
    this.lista.push(lista);
    this.guardarStorage();
  }

  borrarLista(lista:Lista){
    this.lista = this.lista.filter(listaData => {
      console.log(listaData.id + " Otro id: " + lista.id);
      return listaData.id != lista.id
    });
    this.guardarStorage();
  }

  guardarStorage(){
    localStorage.setItem('data',JSON.stringify(this.lista));
  }

  cargarStorage(){
    if(localStorage.getItem('data')){
      this.lista = JSON.parse(localStorage.getItem('data'));
    } else{
      this.lista = [];
    }
  }
}
