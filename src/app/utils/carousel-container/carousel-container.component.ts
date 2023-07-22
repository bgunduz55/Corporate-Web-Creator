import { Component, OnInit, Input } from '@angular/core';
import { PageContent } from 'src/app/models/page-content';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GlobalTexts } from 'src/globals/globalTexts';

@Component({
  selector: 'app-carousel-container',
  templateUrl: './carousel-container.component.html',
  styleUrls: ['./carousel-container.component.scss']
})
export class CarouselContainerComponent implements OnInit {

  @Input() pageData: PageContent = null;
  restUrl = GlobalTexts.restUrl;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<span class="flaticon-back"></span>', '<span class="flaticon-right-arrow"></span>'],
    responsive: {
      0: {
        items: 1 
      },
      1920: {
        items: 2
      }
    },
    nav: true
  }
  @Input() language: string = null;
  getHeaderOptionsByNav(nav: boolean): OwlOptions {
    return {...this.customOptions, nav: nav} as OwlOptions;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
