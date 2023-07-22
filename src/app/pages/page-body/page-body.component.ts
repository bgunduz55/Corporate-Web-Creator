import { Component, OnInit, Input } from '@angular/core';
import { Select } from '@ngxs/store';
import { PageState } from '../../states/page.state';
import { Page } from '../../models/page';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-body',
  templateUrl: './page-body.component.html',
  styleUrls: ['./page-body.component.scss']
})
export class PageBodyComponent implements OnInit {
  @Input() page: Page = null;
  constructor() { }

  ngOnInit(): void {
  }

}
