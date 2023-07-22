import { Component, OnInit, Input } from '@angular/core';
import { GlobalTexts } from 'src/globals/globalTexts';
import { Content } from 'src/app/models/content';

@Component({
  selector: 'app-istun-block',
  templateUrl: './istun-block.component.html',
  styleUrls: ['./istun-block.component.scss']
})
export class IstunBlockComponent implements OnInit {

  @Input() pageData: Content = null;
  @Input() language: string = null;
  restUrl = GlobalTexts.restUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
