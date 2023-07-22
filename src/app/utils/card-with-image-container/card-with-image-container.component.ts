import { Component, OnInit, Input } from '@angular/core';
import { PageContent } from 'src/app/models/page-content';
import { GlobalTexts } from 'src/globals/globalTexts';

@Component({
  selector: 'app-card-with-image-container',
  templateUrl: './card-with-image-container.component.html',
  styleUrls: ['./card-with-image-container.component.scss']
})
export class CardWithImageContainerComponent implements OnInit {

  @Input() pageData: PageContent = null;
  restUrl = GlobalTexts.restUrl;
  @Input() language: string = null;
  constructor() { }

  ngOnInit(): void {
  }

}
