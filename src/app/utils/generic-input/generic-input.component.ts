import { Component, OnInit, Input } from '@angular/core';
import { PageContent } from 'src/app/models/page-content';
import { GlobalTexts } from 'src/globals/globalTexts';

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.scss']
})
export class GenericInputComponent implements OnInit {
  @Input() pageData: PageContent = null;
  @Input() language: string = null;
  restUrl = GlobalTexts.restUrl;
  constructor() { }

  ngOnInit(): void {
  }

}
