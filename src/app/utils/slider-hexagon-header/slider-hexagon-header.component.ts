import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Page } from '../../models/page';

@Component({
  selector: 'app-slider-hexagon-header',
  templateUrl: './slider-hexagon-header.component.html',
  styleUrls: ['./slider-hexagon-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderHexagonHeaderComponent implements OnInit {

  @Input() indexPage: Page = null;
  @Input() language: string = null;
  constructor() { }

  ngOnInit(): void {
  }

}
