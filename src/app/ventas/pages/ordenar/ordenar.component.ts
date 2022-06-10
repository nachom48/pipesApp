import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {
  ordenarPor:string='nombre';
  enMayusculas:boolean=true;
  heroes:Heroe[]=[{
    nombre:'Superman',
    vuela: true,
    color: Color.azul,


  },
  {
    nombre:'Batman',
    vuela: false,
    color: Color.negro,


  },
  {
    nombre:'Robin',
    vuela: false,
    color: Color.verde,


  },
  {
    nombre:'Daredevil',
    vuela: false,
    color: Color.rojo,


  },
  {
    nombre:'Linterna Verde',
    vuela: true,
    color: Color.verde,


  }]

hacerMayusculas(){
  this.enMayusculas=!this.enMayusculas;
}

cambiarOrden(valor:string){
  this.ordenarPor=valor;
}

}
