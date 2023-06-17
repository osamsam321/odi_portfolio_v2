import { AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { NavComponent } from './comp/nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  title = 'portfolio_2023';

  links = ["home", "projects", "about_me", 'misc'];

  // linkIndex = 0;
  
  constructor (private router: Router, private elementRef: ElementRef, private navComponent: NavComponent)
  {
  
  }
  ngAfterViewChecked(): void {
    this.updateNav();

  }
  ngAfterViewInit(): void {

  }
  ngInit()
  {
    // const element = this.elementRef.nativeElement.querySelector('#parent_wrap');

    // if (element) {
    //         element.focus();
    // }
  }

  
  updateNavByUrl(url: String)
  {
    
    // console.log("router url : " + url.replace('/', ""));
    // this.navComponent.focusLink(url.replace('/', ""));
  }
  updateNav()
  {
    
    // console.log("router url in basic: " + this.router.url.replace('/', ""));
    // this.navComponent.focusLink(this.router.url.replace('/', ""));
  }
}


