import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  //i18nSelect
  nombre:string ='Susana';
  genero:string = 'femenino';
  invitacionMapa={
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }


  //i18nPlural
//si o si necesita el mapa para q trabaje
  clientes:string[]=['Maria','Pedro','Juan','Lucia','Carolina'];
  clientesMapa={
    '=0': ' no tenemos ningun cliente esperando.',
    '=1': ' tenemos 1 cliente esperando',
    '=2': ' tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }
  //Slice Pipe

  cambiarPersona(){
    this.nombre="agustina";
  }
  eliminarPersona(){
    this.clientes.pop();
  }


  //keyValuePipe

    persona = {
      nombre:'Fernando',
      edad:35,
      direccion:'Otawwa,Canada'
    }

    //JsonPipe

    heroes =[
      {
        nombre:'Superman',
        vuela: true,
      },
      {
        nombre:'Robin',
        vuela: false,
      },
      {
        nombre:'Aquaman',
        vuela: false,
      }

    ]

    //ASYNC PIPE
//esto es un observable que emite valores numericos,el primer valor es el 0,luego el 1 luego el 2 ,3 ,4, 5, 6
    miObservable=interval(1000);

    valorPromesa= new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve('Tenemos data de promesa')
      }, 3500);
    })
}
