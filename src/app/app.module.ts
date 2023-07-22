import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

import {PageState} from './states/page.state';
import { UtilsModule } from './utils/utils.module';

import { HttpClientModule } from '@angular/common/http';
import {
  MatTabsModule
} from '@angular/material/tabs';
import { JwPaginationModule } from 'jw-angular-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { SanitizeUrlPipe } from './pipes/sanitize-url.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    NgxsModule.forRoot([
      PageState
    ]),
    NgxsStoragePluginModule.forRoot(),
    ReactiveFormsModule,
    JwPaginationModule,
    HttpClientModule,
    CarouselModule,
    UtilsModule
  ],
  bootstrap: [AppComponent],
  providers: [SanitizeHtmlPipe, SanitizeUrlPipe]
})
export class AppModule { }
