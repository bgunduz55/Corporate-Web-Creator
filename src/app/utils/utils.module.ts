import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWithImageContainerComponent } from './card-with-image-container/card-with-image-container.component';
import { CarouselContainerComponent } from './carousel-container/carousel-container.component';
import { PageRowsComponent } from './page-rows/page-rows.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { InfoBlockWithImageComponent } from './info-block-with-image/info-block-with-image.component';
import { CardWithIconTopComponent } from './card-with-icon-top/card-with-icon-top.component';
import { SliderHexagonHeaderComponent } from './slider-hexagon-header/slider-hexagon-header.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { JwPaginationModule } from 'jw-angular-pagination';
import { JwPaginationComponent } from './jw-paginate';
import { GenericInputComponent } from './generic-input/generic-input.component';
import { SanitizeHtmlPipe } from '../pipes/sanitize-html.pipe';
import { TabbedBlockComponent } from './tabbed-block/tabbed-block.component';
import { MatTabsModule } from '@angular/material/tabs';
import { IstunBlockComponent } from './istun-block/istun-block.component';
import { LeftVideoBlockComponent } from './left-video-block/left-video-block.component';
import { CardWithImageContainer2Component } from './card-with-image-container2/card-with-image-container2.component';
import { SanitizeUrlPipe } from '../pipes/sanitize-url.pipe';



@NgModule({
  declarations: [SanitizeHtmlPipe,
    CardWithImageContainerComponent,
    CarouselContainerComponent,
    PageRowsComponent,
    InfoBlockWithImageComponent,
    CardWithIconTopComponent,
    SliderHexagonHeaderComponent,
    ProductTableComponent,
    JwPaginationComponent,
    GenericInputComponent,
    TabbedBlockComponent,
    IstunBlockComponent,
    LeftVideoBlockComponent,
    CardWithImageContainer2Component,
    SanitizeUrlPipe],
  imports: [
    CommonModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
  ],
  exports: [SanitizeHtmlPipe,
    CardWithImageContainerComponent,
    CarouselContainerComponent,
    PageRowsComponent,
    InfoBlockWithImageComponent,
    CardWithIconTopComponent,
    SliderHexagonHeaderComponent,
    ProductTableComponent,
    JwPaginationComponent,
    GenericInputComponent,
    TabbedBlockComponent,
    IstunBlockComponent,
    CardWithImageContainer2Component,
    SanitizeUrlPipe],
})
export class UtilsModule { }
