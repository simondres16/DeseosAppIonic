import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/index';

@Component({
  selector: 'page-terminados',
  templateUrl: 'terminados.component.html'
})

export class TerminadosPage {
  
  constructor(public deseosService:DeseosService){

  }

  listaSeleccionada(lista:Lista){

  }
}
