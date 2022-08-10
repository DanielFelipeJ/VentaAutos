import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ListaAutosComponent} from "./autos/lista-autos/lista-autos.component";
import {FormsModule} from "@angular/forms";
import { AEspacioPipe } from './shared/pipes/a-espacio.pipe';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { EstrellasComponent } from './shared/estrellas/estrellas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAutosComponent,
    AEspacioPipe,
    EstrellasComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
