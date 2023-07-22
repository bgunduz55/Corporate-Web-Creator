import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { UtilsModule } from '../utils/utils.module';
import { MatTabsModule } from '@angular/material/tabs';
import { IndexPageResolver } from '../resolvers/index-page.resolver';
import { SanitizeHtmlPipe } from '../pipes/sanitize-html.pipe';
import { HeaderFooterResolver } from '../resolvers/header-footer.resolver';


@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    CarouselModule,
    MatTabsModule,
    UtilsModule
  ],
  bootstrap: [MainPageComponent],
  providers: [IndexPageResolver, HeaderFooterResolver]
})
export class MainPageModule { }
