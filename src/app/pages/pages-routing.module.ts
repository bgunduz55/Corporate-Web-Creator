import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { PageResolver } from '../resolvers/page.resolver';
import { HeaderFooterResolver } from '../resolvers/header-footer.resolver';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [],
    resolve: [PageResolver, HeaderFooterResolver]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
