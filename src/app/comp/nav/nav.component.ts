import { Location } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Injectable, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, AfterViewInit	 {



  links = ["home", "projects", "about_me", 'misc'];
  tabIndex = 0;
  linkIndex = 0;
  isFocused = false;
  currentUrl: any;
  route!:string;
  constructor(private renderer: Renderer2, private el: ElementRef, private router: Router,
    private activated_route: ActivatedRoute, private location: Location) {}
  ngAfterViewInit(): void {
    this.prepare_nav();


  }
  ngOnInit(): void {
    console.log("word");
}
  prepare_nav()
  {
    this.router.events.subscribe((val) => {
      if(location.pathname != ''){
        this.route = location.pathname;
        console.log("current router sir: " + this.route);
      } else {
        this.route = '/'
      }
    });
  }
  
  
  focusLink(nav_value: String)
  {
    console.log("nav_value: " + nav_value);
    let inputElement = this.el.nativeElement.querySelector('#'+nav_value);
    console.log(inputElement.id);
    this.renderer.selectRootElement(inputElement, true).focus();
  }

  updateNav()
  {
    
    console.log("router url in basic: " + this.router.url.replace('/', ""));
    this.focusLink(this.router.url.replace('/', ""));
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    
    if (event.key === 'ArrowRight') {
      console.log('Right arrow key now pressed');
      // Handle right arrow key event
      this.linkIndex = (this.linkIndex + 1) % this.links.length; // Increment linkindex by 1
    } else if (event.key === 'ArrowLeft') {
      console.log('Left arrow key now pressed');
      // Handle left arrow key event
      
        this.linkIndex = (this.linkIndex <= 0)? this.links.length - 1: this.linkIndex - 1
  
    }
    console.log('link index value {}', this.linkIndex);

    this.router.navigate([this.links[this.linkIndex]]);
    this.updateNav();

  }

  updateNavIndex(index_value: number) {
    this.linkIndex = index_value;
  }
  // ngOnInit()
  // {

  // }
 
 
}








