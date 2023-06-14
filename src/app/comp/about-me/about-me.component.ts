import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  //....
} from '@angular/animations';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        height: '95vh',
        display: 'none',
        backgroundColor: 'rgba(150,130,50,.12)'
      })),
      transition('open => closed', [
        animate('0.25s')
      ]),
      transition('closed => open', [
        animate('0.25s')
      ]),
    ]),
  ],
})
export class AboutMeComponent implements AfterViewInit {


  modal_is_open = false;
  new_modal_opened = false;
  model_to_open_title?: string;
  current_page_val = 0;
  //add another page here if needed to modify
  @ViewChild('modal', { static: false }) model_ref?: ElementRef ;
  @ViewChild('main_page', { static: false }) main_page_ref?: ElementRef ;
  @ViewChild('skills_box_cont', { static: false }) skills_box_cont_ref?: ElementRef ;
  @ViewChild('skills_container_section') skills_box_section_ref!: ElementRef ;
  @ViewChild('about_me_section') about_me_section_ref!: ElementRef ;
  page_element_ref_list: ElementRef<any>[] = [];



  skills_boxes: skillsBox[] = [];
 
  constructor(private model: ElementRef, private r2: Renderer2, 
    skills_box_section_ref: ElementRef,  about_me_section_ref: ElementRef){}
  ngAfterViewInit(): void {
      this.page_element_ref_list = [this.skills_box_section_ref, this.about_me_section_ref];
    
    console.log("element ref_list size: " + this.page_element_ref_list.length);
  }

  //increment page index
  changeToNextPage() {
    this.current_page_val = (this.current_page_val + 1) % this.page_element_ref_list.length;
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
    console.log("close model");
  // this.r2.setStyle(this.model_ref, "display", "hidden");

    this.modal_is_open = false;
  }

 
  skillsBoxClicked(event: Event)
  {
    const clickedElement = event.target as HTMLDivElement;
    const id = clickedElement.id;
    this.model_to_open_title = id;
    this.new_modal_opened = true;
    this.closeModal();
    this.openModal();    
  }
  magePageClicked(event: Event)
  {
    const model_clicked = this.model_ref?.nativeElement.contains(event.target);

    if(this.modal_is_open)
    {
      if(!model_clicked)
      {     
        if(!this.new_modal_opened)
        {
          this.closeModal();
        }

        this.new_modal_opened = false;
      }
    }
  }

  @HostListener('document:keydown.ArrowDown')
  scrollDown() {
    window.scrollBy(0, 600);
  }

  @HostListener('document:keydown.ArrowUp')
  scrollUp() {
    window.scrollBy(0, -600);
  }

  // main_page_click(event: Event) {
  //   const model_clicked = this.model_ref?.nativeElement.contains(event.target);
  //   const skills_box_clicked = this.skills_box_cont_ref?.nativeElement.contains(event.target);

  //   if(skills_box_clicked && !this.modal_is_open)
  //   {
  //     this.openModal();
  //   }

  //   else if(!model_clicked && this.modal_is_open)
  //   {
  //     this.closeModal();
  //   }

  // }

 
}

 class skillsBox
{
   title!: String;
   img_url!: String;
   description!: String;
   years_experience!: number;
 
}


