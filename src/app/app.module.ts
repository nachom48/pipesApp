import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
//Cambiar el locale de la app de manera global
//haceindo esto  registro el español de argentina
import localEs from '@angular/common/locales/es-AR';
import { registerLocaleData} from '@angular/common';
registerLocaleData(localEs)
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    VentasModule


  ],
  //aca lo registro de manera global poniendol en providers
  providers: [
    {
      provide: LOCALE_ID, useValue:'es-AR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
