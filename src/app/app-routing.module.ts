import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageResolver } from './resolvers/page.resolver';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule) },

      { path: '**', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
