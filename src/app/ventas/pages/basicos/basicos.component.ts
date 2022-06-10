import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {
 nombreLower:string="fernando"
 nombreUpper:string="FERNANDO"
 nombreCompleto:string="ferNandO HeRRerA"

fecha:Date=new Date()//es el dia de hoy siempre en Js
}


