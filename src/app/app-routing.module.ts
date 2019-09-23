import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  //Ruta Index
  { path: '', component: HomeComponent },
  //Ruta Home
  { path: 'home', component: HomeComponent },
  //Ruta Error
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
