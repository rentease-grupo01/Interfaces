import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Interfaces/Compartido/Landing/landing/landing.component';
import { NavbarComponent } from './Interfaces/Compartido/Navbar/navbar/navbar.component';
import { FotherComponent } from './Interfaces/Compartido/Fother/fother/fother.component';
import { LogRegComponent } from './Interfaces/Componentes/Login-Registro/log-reg/log-reg.component';
import { ListarAlojComponent } from './Interfaces/Componentes/Lista-Alojamientos/listar-aloj/listar-aloj.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'log-reg', component: LogRegComponent },
  { path: 'list-aloj', component: ListarAlojComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
