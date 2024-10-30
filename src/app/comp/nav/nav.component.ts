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
  route!:string;
  activeLink: string = 'home';
  nav_link_index_selected:any;

  constructor(private r2: Renderer2, private el: ElementRef, private router: Router,
    private activated_route: ActivatedRoute, private location: Location) {}
  ngAfterViewInit(): void {
    this.prepare_nav();
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
  // Method to set the active link
  setActive(link: string) {
    this.activeLink = link;
  }


}








