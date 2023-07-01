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
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        height: '95vh',
        display: 'none',
        backgroundColor: 'rgba(50, 50, 50,.12)'
      })),
      transition('open => closed', [
        animate('.20s')
      ]),
      transition('closed => open', [
        animate('.20s')
      ]),
    ]),
  ],
})
export class ProjectsComponent implements AfterViewInit{
  @ViewChild('page_1') page_1_ref!: ElementRef ;
  @ViewChild('page_2') page_2_ref!: ElementRef ;
  @ViewChild('dunbar_work_experience_section') dunbar_work_experience_section_ref!: ElementRef ;
  @ViewChild('page0_dot_value', { static: false }) page0_dot_value!: ElementRef ;
  @ViewChild('page1_dot_value', { static: false }) page1_dot_value!: ElementRef ;
  @ViewChild('page2_dot_value', { static: false }) page2_dot_value!: ElementRef ;
  @ViewChild('modal', { static: false }) model_ref?: ElementRef ;

  section_screen_animation_done = true;
  current_page_val = 0;
  modal_is_open = false;
  new_modal_opened = false;
  model_to_open_title?: string;

  constructor(private model: ElementRef, private r2: Renderer2, 
    page_2_ref: ElementRef,  page_1_ref: ElementRef,
    dunbar_work_experience_section_ref: ElementRef){}
    ngAfterViewInit(): void {
    this.page_element_ref_list = [this.page_2_ref, this.page_1_ref, 
      ];
      this. page_dot_List = 
      [this.page0_dot_value, this.page1_dot_value];
      this.updateDotValue(this.current_page_val);
    }


  page_dot_List!:ElementRef[];
  page_element_ref_list: ElementRef<any>[] = [];
  changeToNextPageUp() {

 
    this.current_page_val = (this.current_page_val <= 0)?
    this.page_element_ref_list.length - 1: this.current_page_val - 1;
    if(this.section_screen_animation_done)
    {
      this.updateDotValue(this.current_page_val);
      this.section_screen_animation_done = false;

    }
    console.log("current page value: " + this.current_page_val);
    console.log("page element list size: " + this.page_element_ref_list.length);
  }
  //increment page index
  changeToNextPageDown() {
    this.current_page_val = (this.current_page_val + 1) % this.page_element_ref_list.length;
    if(this.section_screen_animation_done)
    {
      this.updateDotValue(this.current_page_val);
      this.section_screen_animation_done = false;

    }
    console.log("current page value: " + this.current_page_val);
    console.log("page element list size: " + this.page_element_ref_list.length);
    // this.showNewPage(this.current_page_val);
  }

  openModal() {
    if(!this.modal_is_open){

      console.log("show model");

      this.modal_is_open = true;

    }
  }

  closeModal() {
    console.log("inside of close model");
  // this.r2.setStyle(this.model_ref, "display", "hidden");
    if(this.modal_is_open)
    {
      this.modal_is_open = false;
    }
  }
  updateCurrentPageVal(page_val:number)
  {
    
    this.current_page_val = page_val;
    this.updateDotValue(this.current_page_val);
  }
  resetDotStyle()
  {
    for(let elref of this.page_dot_List)
    {
      this.r2.setStyle(elref.nativeElement, "background-color", 'white' );
    }
  }
  updateDotValue(page_val:number)
  {
    this.resetDotStyle();
    console.log("now change dot color");
    this.r2.setStyle(this.page_dot_List[page_val].nativeElement, 
      "background-color", 'rgba(200, 200, 50, 1)' );
  }

  skillsBoxClicked(event: Event)
  {
    console.log("skills box clicked");
    const clickedElement = event.target as HTMLDivElement;
    const id = clickedElement.id;
    this.model_to_open_title = id;
    this.new_modal_opened = true;
    this.closeModal();
    this.openModal();    
  }
  onAnimationDone($event: AnimationEvent) {
    this.section_screen_animation_done = true;
    console.log("animation done");
  }
  @HostListener('document:keydown', ['$event'])
  @HostListener('window:wheel', ['$event'])
 handleKeyDownPress(event: KeyboardEvent | WheelEvent) {
   
   if(!this.section_screen_animation_done)
   {
     return;
   }
   else if(event instanceof KeyboardEvent)
   {
       // Only handle the keystroke if the event target is the body element
     if (event.key === 'ArrowDown' || event.key === 'PageDown' || event.key === 'Mou') {

         this.changeToNextPageDown();

     }
     else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
       if(this.section_screen_animation_done)
       {
         this.changeToNextPageUp();
       }
     }
     else if(event.key == 'Enter')
     {
       if(this.section_screen_animation_done)
       {
         if(!this.modal_is_open)
         {
           console.log("enter pressed");
           this.skillsBoxClicked(event);
         }

         else
         {
           this.closeModal();
         }
       
       }
       
     }
     else if(event.key === 'Tab')
     {

     }
  
   }
   
   else if (event instanceof WheelEvent) {
     // Mouse scroll event
     const scrollDistance = event.deltaY;
     if (scrollDistance > 0) {
       // Scrolling down
       console.log('Scrolling down');
       this.changeToNextPageDown();

     } else if (scrollDistance < 0) {
       // Scrolling up
       console.log('Scrolling up');
       this.changeToNextPageUp();

     }
     
   }
 }

}
