import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { PageState } from '../states/page.state';
import { Page } from '../models/page';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  @Select(PageState.getPage) page$: Observable<Page>;

  @Select(PageState.getHeaderFooter) headerFooter$: Observable<Page>;

  @Select(PageState.getSelectedLanguage) language$: Observable<string>;

  constructor() { }

  ngOnInit(): void {
    
  }

}
