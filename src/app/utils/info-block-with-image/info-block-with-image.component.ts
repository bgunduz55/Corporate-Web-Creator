import { Component, OnInit, Input } from '@angular/core';
import { PageContent } from 'src/app/models/page-content';
import { GlobalTexts } from 'src/globals/globalTexts';

@Component({
  selector: 'app-info-block-with-image',
  templateUrl: './info-block-with-image.component.html',
  styleUrls: ['./info-block-with-image.component.scss']
})
export class InfoBlockWithImageComponent implements OnInit {

  @Input() pageData: PageContent = null;
  restUrl = GlobalTexts.restUrl;
  @Input() language: string = null;
  constructor() { }

  ngOnInit(): void {
  }

}
