import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageResolver } from '../resolvers/page.resolver';
import { PageBodyComponent } from './page-body/page-body.component';
import { UtilsModule } from '../utils/utils.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderFooterResolver } from '../resolvers/header-footer.resolver';


@NgModule({
  declarations: [PagesComponent, HeaderComponent, FooterComponent, PageBodyComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CarouselModule,
    UtilsModule
  ],
  bootstrap: [PagesComponent],
  providers: [PageResolver, HeaderFooterResolver]
})
export class PagesModule { }
