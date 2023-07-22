import { Component, OnInit, Input } from '@angular/core';
import { PageContent } from 'src/app/models/page-content';
import { Content } from '../../models/content';
import { GlobalTexts } from 'src/globals/globalTexts';

@Component({
  selector: 'app-tabbed-block',
  templateUrl: './tabbed-block.component.html',
  styleUrls: ['./tabbed-block.component.scss']
})
export class TabbedBlockComponent implements OnInit {

  @Input() pageData: Content = null;
  @Input() language: string = null;
  restUrl = GlobalTexts.restUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
