import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit() {
    console.log("inside of home ngInit");
    // Get a reference to the sky element
    this.render_arials();
    
}
  

 render_arials() {
  const sky = this.elRef.nativeElement.querySelector('.sky');

  // Define an array of plane images to use
  // const planeImages = ['../../../../assets/img/home_img/icons8-plane-50.png', '../../../../assets/img/home_img/icons8-ufo-67.png', '../../../../assets/img/home_img/icons8-jet-64.png'];
    const planeImages = ['../../../../assets/img/home_img/icons8-ufo-67.png'];
   // Define a function to create a new plane element
   const createPlane = () => {
    // Choose a random plane image from the array
    const planeImage = planeImages[Math.floor(Math.random() * planeImages.length)];

    // Create a new div element for the plane
    const plane = this.renderer.createElement('div');
    // check if plane should start right or left of screen
    const randomX = Math.round(Math.random());
    console.log("randomx value: " + randomX);
    if(randomX == 0){
      this.renderer.addClass(plane, 'plane_move_right');
     }
    else{
      console.log("plane will be moved left");
      this.renderer.addClass(plane, 'plane_move_left');
     }
    this.renderer.setStyle(plane, 'background-image', `url(${planeImage})`);

    // Set a random vertical position for the plane
    const randomY = Math.floor(Math.random() * (window.innerHeight * .10) + 20);
    //return 0 or 1
    
    this.renderer.setStyle(plane, 'top', `${randomY}px`);

    // Add the plane to the sky element
    this.renderer.appendChild(sky, plane);
  };

  // Define a function to create a specified number of planes
  const createPlanes = (count: number) => {

    // execute with delay
    let delayInMilliseconds = (Math.random() * 2000) + 1000;
    for (let i = 0; i < count; i++) {

      setTimeout(() => {
        createPlane();
      }, delayInMilliseconds);

    }
   
  };

  // Call the createPlanes function with a random number of planes (1-2)

  // Function with delay


  createPlanes(1);
}}

