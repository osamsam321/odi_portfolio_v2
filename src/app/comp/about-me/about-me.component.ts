import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  skills_boxes: skillsBox[] = [];
  ngOnInit(): void {
  this.createSkillsBox();
  }
  
  createSkillsBox()
  {
      let temp_skills_box: skillsBox[] = [
          {
            title:"Java", 
            img_url: "", 
            description: "",
            years_experience: 0

          },

          {
            title:"Linux", 
            img_url: "", 
            description: "",
            years_experience: 0

          },


          {
            title:"Front End", 
            img_url: "", 
            description: "",
            years_experience: 0

          },

          {
            title:"AWS", 
            img_url: "", 
            description: "",
            years_experience: 0

          },

          {
            title:"Micrsoft", 
            img_url: "", 
            description: "",
            years_experience: 0

          },


          {
            title:"Other Software Tools", 
            img_url: "", 
            description: "",
            years_experience: 0

          },

        ];

        this.skills_boxes = temp_skills_box;
  }
}

 class skillsBox
{
   title!: String;
   img_url!: String;
   description!: String;
   years_experience!: number;

  
}