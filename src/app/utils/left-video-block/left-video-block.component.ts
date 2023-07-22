import { Component, OnInit, Input } from '@angular/core';
import { Content } from 'src/app/models/content';
import { GlobalTexts } from '../../../globals/globalTexts';

@Component({
  selector: 'app-left-video-block',
  templateUrl: './left-video-block.component.html',
  styleUrls: ['./left-video-block.component.scss']
})
export class LeftVideoBlockComponent implements OnInit {

  @Input() pageData: Content = null;
  @Input() language: string = null;
  restUrl = GlobalTexts.restUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
