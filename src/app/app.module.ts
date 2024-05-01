import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Interfaces/Compartido/Navbar/navbar/navbar.component';
import { FotherComponent } from './Interfaces/Compartido/Fother/fother/fother.component';
import { LandingComponent } from './Interfaces/Compartido/Landing/landing/landing.component';
import { LogRegComponent } from './Interfaces/Componentes/Login-Registro/log-reg/log-reg.component';
import { Parte1Component } from './Interfaces/Compartido/Landing/parte1/parte1.component';
import { Parte2Component } from './Interfaces/Compartido/Landing/parte2/parte2.component';
import { Parte3Component } from './Interfaces/Compartido/Landing/parte3/parte3.component';
import { Parte4Component } from './Interfaces/Compartido/Landing/parte4/parte4.component';
import { ListarAlojComponent } from './Interfaces/Componentes/Lista-Alojamientos/listar-aloj/listar-aloj.component';
import { CrearAlojComponent } from './Interfaces/Componentes/Crear-Alojamiento/crear-aloj/crear-aloj.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FotherComponent,
    LandingComponent,
    LogRegComponent,
    Parte1Component,
    Parte2Component,
    Parte3Component,
    Parte4Component,
    ListarAlojComponent,
    CrearAlojComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
