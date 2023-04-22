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
    const sky = this.elRef.nativeElement.querySelector('.sky');

    // Define an array of plane images to use
    const planeImages = ['../../../../assets/img/home_img/icons8-plane-50.png', '../../../../assets/img/home_img/icons8-ufo-67.png', '../../../../assets/img/home_img/icons8-jet-64.png'];

     // Define a function to create a new plane element
     const createPlane = () => {
      // Choose a random plane image from the array
      const planeImage = planeImages[Math.floor(Math.random() * planeImages.length)];

      // Create a new div element for the plane
      const plane = this.renderer.createElement('div');
      this.renderer.addClass(plane, 'plane');
      this.renderer.setStyle(plane, 'background-image', `url(${planeImage})`);

      // Set a random vertical position for the plane
      const randomY = Math.floor(Math.random() * (sky.offsetHeight - plane.offsetHeight));
      this.renderer.setStyle(plane, 'top', `${randomY}px`);

      // Add the plane to the sky element
      this.renderer.appendChild(sky, plane);
    };

    // Define a function to create a specified number of planes
    const createPlanes = (count: number) => {
      for (let i = 0; i < count; i++) {
        createPlane();
      }
    };

    // Call the createPlanes function with a random number of planes (1-5)
    createPlanes(Math.floor(Math.random() * 5) + 1);
  }
}
  

