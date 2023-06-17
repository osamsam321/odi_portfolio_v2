import { Location } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Injectable, OnInit, Renderer2, ViewChild } from '@angular/core';
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
  linkIndex = 0;
  isFocused = false;
  currentUrl: any;
  route!:string;
  @ViewChild('nav_home_link', { static: false }) nav_home_link_er!: ElementRef;
  @ViewChild('nav_projects_link', { static: false }) nav_projects_link_er!: ElementRef;
  @ViewChild('nav_about_me_link', { static: false }) nav_about_me_link_er!: ElementRef;
  @ViewChild('nav_misc_link', { static: false }) nav_misc_link_er!: ElementRef;

  links_er!:ElementRef[];

  constructor(private r2: Renderer2, private el: ElementRef, private router: Router,
    private activated_route: ActivatedRoute, private location: Location) {}
  ngAfterViewInit(): void {
    this.prepare_nav();
    this.links_er = [this.nav_home_link_er, this.nav_projects_link_er, 
      this.nav_about_me_link_er, this.nav_misc_link_er]
      this.focusLink(this.linkIndex);
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
  
  resetNavLinkStyle()
  {
    for(let nav_er of this.links_er )
    {
      this.r2.setStyle(nav_er.nativeElement, 'color', 'white');
    }
  }
  
  focusLink(nav_index: number)
  {
    console.log("nav_value: " + nav_index);
    // console.log(inputElement.id);
    this.resetNavLinkStyle();
     this.r2.setStyle(this.links_er[nav_index].nativeElement, 'color', 'red');
  }

  updateNav(nav_index: number)
  {
    
    // console.log("router url in basic: " + this.router.url.replace('/', ""));
    this.focusLink(nav_index);
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
    this.updateNav(this.linkIndex);

  }

  updateNavIndex(index_value: number) {
    this.linkIndex = index_value;
  }
  // ngOnInit()
  // {

  // }
 
 
}








