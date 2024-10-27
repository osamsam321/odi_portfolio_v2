import { Location } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Injectable, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  encapsulation: ViewEncapsulation.None, // Add this line
})
export class NavComponent implements OnInit, AfterViewInit	 {



  links = ["home", "about_me", "projects",  'misc'];
  linkIndex = 0;
  isFocused = false;
  currentUrl: any;
  route!:string;
  @ViewChild('nav_home_link', { static: false }) nav_home_link_er!: ElementRef;
  @ViewChild('nav_projects_link', { static: false }) nav_projects_link_er!: ElementRef;
  @ViewChild('nav_about_me_link', { static: false }) nav_about_me_link_er!: ElementRef;
  @ViewChild('nav_misc_link', { static: false }) nav_misc_link_er!: ElementRef;
  nav_link_index_selected:any;
  links_er!:ElementRef[];

  constructor(private r2: Renderer2, private el: ElementRef, private router: Router,
    private activated_route: ActivatedRoute, private location: Location) {}
  ngAfterViewInit(): void {
    this.prepare_nav();
    this.links_er = [this.nav_home_link_er, this.nav_about_me_link_er, this.nav_projects_link_er,
    this.nav_misc_link_er];
  }
  ngOnInit(): void {
    this.router.navigate([this.links[0]]);
  }
  prepare_nav()
  {
    this.router.events.subscribe((val) => {
      if(location.pathname != ''){
        this.route = location.pathname;
      } else {
        this.route = '/'
      }
    });
  }


}








