import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Select, Store } from '@ngxs/store';
import { PageState } from '../states/page.state';
import { Observable } from 'rxjs';
import { SetSelectedLanguage } from '../actions/page.action';
import { Page } from '../models/page';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
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
      }
    },
    nav: true
  }
  @Select(PageState.getSelectedLanguage) language$: Observable<string>;

  @Select(PageState.getIndexPage) indexPage$: Observable<Page>;

  @Select(PageState.getHeaderFooter) headerFooter$: Observable<Page>;

  getHeaderOptionsByNav(nav: boolean): OwlOptions {
    return {...this.customOptions, nav: nav} as OwlOptions;
  }
  title = 'Corporate';

  constructor(private store: Store) { }

  ngOnInit(): void {
    
  }

  scrollToTop(){
    try
    {
     window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
     } catch (e) {
      window.scrollTo(0, 0);
      }
  }

  changeSelectedLanguage(lang: string){
    this.store.dispatch(new SetSelectedLanguage(lang));
  }

}
