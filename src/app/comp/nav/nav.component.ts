import { AfterViewInit, Component, ElementRef, Injectable, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, AfterViewInit	 {



  tabIndex = 0;
  isFocused = false;

  constructor(private renderer: Renderer2, private el: ElementRef, private router: Router) {}
  ngAfterViewInit(): void {
    console.log("word");

    console.log("router navigartion url: " + this.router.getCurrentNavigation()?.extractedUrl.toString());

  }
  ngOnInit(): void {
    console.log("word");

     console.log("router navigartion url: " + this.router.getCurrentNavigation()?.extractedUrl.toString());
}

  focusLink(nav_value: String)
  {
    console.log("nav_value: " + nav_value);
    let inputElement = this.el.nativeElement.querySelector('#'+nav_value);
    console.log(inputElement.id);
    this.renderer.selectRootElement(inputElement, true).focus();
  }
  // ngOnInit()
  // {

  // }
 
 
}








