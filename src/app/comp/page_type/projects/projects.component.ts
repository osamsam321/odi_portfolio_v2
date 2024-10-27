import {  trigger,
  state,
  style,
  animate,
  transition,
AnimationEvent, } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements AfterViewInit{

  constructor(private model: ElementRef, private r2: Renderer2,
    page_2_ref: ElementRef,  page_1_ref: ElementRef,
    dunbar_work_experience_section_ref: ElementRef){}
    ngAfterViewInit(): void {
    }
}
