import { Component, OnInit, Input } from '@angular/core';
import { Footer } from 'src/app/models/footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() header: Footer = null;
  @Input() language: string = null;

  constructor() { }

  ngOnInit(): void {
  }

  scrollToTop(){
    try 
    { 
     window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
     } catch (e) {
      window.scrollTo(0, 0);
      }
  }
}
