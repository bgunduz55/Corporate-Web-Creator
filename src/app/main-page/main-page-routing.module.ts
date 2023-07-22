import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { IndexPageResolver } from '../resolvers/index-page.resolver';


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [],
    resolve: [IndexPageResolver]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class MainPageRoutingModule { }
