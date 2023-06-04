import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {


  modal_is_open = false;
  new_modal_opened = false;
  model_to_open_title?: string;
  @ViewChild('modal', { static: false }) model_ref?: ElementRef ;
  @ViewChild('main_page', { static: false }) main_page_ref?: ElementRef ;
  @ViewChild('skills_box_cont', { static: false }) skills_box_cont_ref?: ElementRef ;

  skills_boxes: skillsBox[] = [];
  ngOnInit(): void {

  }
  constructor(private model: ElementRef, private r2: Renderer2){}

   openModal() {
    if(!this.modal_is_open){
      // this.r2.setStyle()
      console.log("show model");
      // this.r2.setStyle(this.model_ref, "display", "block");

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
