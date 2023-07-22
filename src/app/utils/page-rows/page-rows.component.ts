import { Component, OnInit, Input } from '@angular/core';
import { PageContent } from 'src/app/models/page-content';
import { Select } from '@ngxs/store';
import { PageState } from 'src/app/states/page.state';
import { Observable } from 'rxjs';
import { Content } from '../../models/content';

@Component({
  selector: 'app-page-rows',
  templateUrl: './page-rows.component.html',
  styleUrls: ['./page-rows.component.scss']
})
export class PageRowsComponent implements OnInit {
  @Input() pageData: Content = null;
  @Select(PageState.getSelectedLanguage) language$: Observable<string>;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.pageData);
  }

}
