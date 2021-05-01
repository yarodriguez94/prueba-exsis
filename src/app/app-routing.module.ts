import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardNoticiasComponent } from './components/card-noticias/card-noticias.component';
import { HomeComponent } from './components/home/home.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  
  //{ path: '**',pathMatch:'full', redirectTo:'home' },
  { path: 'home', component: HomeComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'noticias/:id', component: NoticiasComponent },
  { path: 'registro', component: RegistroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
