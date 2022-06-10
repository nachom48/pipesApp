import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  items:MenuItem[]=[]
  ngOnInit() {
    this.items = [
      {
        label:'Pipes de Angular',
        icon :'pi pi-desktop',
        items: [{
          label     :'Textos y Fechas',
          icon      : 'pi pi-align-left',
          routerLink:'/'
        },
          {
            label     :'Numeros',
            icon      : 'pi pi-dollar',
            routerLink:'numeros'
        },
        {
          label     :'No Comunes',
          icon      : 'pi pi-globe',
          routerLink:'no-comunes'
      },
      {
        label     : 'Pipes Personalizados',
        icon      : 'pi pi-cog',
    },
    {
      label     : 'Pipes Personolizados',
      icon      : 'pi pi-cog',
      routerLink: 'ordenar'

  }]
      }

            ]
        }

}



