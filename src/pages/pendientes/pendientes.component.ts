import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/index';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';


@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.component.html'
})
export class PendientesPage {

  constructor(public deseosService:DeseosService,
              private navCtrl:NavController,
              private alertCtrl:AlertController){

  }
  
  agregarLista(){

    const alert = this.alertCtrl.create({
      title: 'Nueva lista',
      message: 'Nombre de la nueva lista',
      inputs: [{
        name:'titulo',
        placeholder:'Nombre de la lista'
      }],
      buttons:[{
        text:'Cancelar'
      },{
        text:'Agregar',
        handler: data => {
          if (data.titulo.length === 0) {
            return;
          }
          this.navCtrl.push( AgregarPage,{
            titulo: data.titulo
          });
        }
      }]
    });

    alert.present();
  }

}
