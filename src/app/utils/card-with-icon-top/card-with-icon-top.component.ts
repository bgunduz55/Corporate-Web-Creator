import { Component, OnInit, Input } from '@angular/core';
import { GlobalTexts } from 'src/globals/globalTexts';
import { PageContent } from 'src/app/models/page-content';

@Component({
  selector: 'app-card-with-icon-top',
  templateUrl: './card-with-icon-top.component.html',
  styleUrls: ['./card-with-icon-top.component.scss']
})
export class CardWithIconTopComponent implements OnInit {

  @Input() pageData: PageContent = null;
  restUrl = GlobalTexts.restUrl;
  @Input() language: string = null;
  constructor() { }

  ngOnInit(): void {
  }

}
