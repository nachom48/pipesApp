import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset'
import { MenubarModule } from 'primeng/menubar';
import {ToolbarModule} from 'primeng/toolbar';
import { TableModule} from 'primeng/table';


//este modulo lo unico que hace es importarlo  de PrimeNg y luego lo exporta

@NgModule({
   exports:[
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    ToolbarModule,
    TableModule
   ],
  imports: [
    CommonModule
  ],
})
export class PrimeNgModule { }
