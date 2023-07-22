import { Component, OnInit, Input } from '@angular/core';
import { Content } from 'src/app/models/content';
import { GlobalTexts } from '../../../globals/globalTexts';

@Component({
  selector: 'app-card-with-image-container2',
  templateUrl: './card-with-image-container2.component.html',
  styleUrls: ['./card-with-image-container2.component.scss']
})
export class CardWithImageContainer2Component implements OnInit {

  @Input() pageData: Content = null;
  @Input() language: string = null;
  restUrl = GlobalTexts.restUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
