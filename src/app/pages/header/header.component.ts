import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Page } from 'src/app/models/page';
import { Select, Store } from '@ngxs/store';
import { PageState } from '../../states/page.state';
import { Observable } from 'rxjs';
import { SetSelectedLanguage } from '../../actions/page.action';
import { Footer } from '../../models/footer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  @Input() page: Page = null;
  @Input() header: Footer = null;

  @Select(PageState.getSelectedLanguage) language$: Observable<string>;
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  changeSelectedLanguage(lang: string){
    this.store.dispatch(new SetSelectedLanguage(lang));
  }

}
