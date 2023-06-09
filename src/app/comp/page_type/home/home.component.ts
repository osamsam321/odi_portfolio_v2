import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscription!: Subscription;

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit() {
    console.log("inside of home ngInit");
    // Get a reference to the sky element
    // uncomment for the suprise
    // let random_time_milli = (Math.random() * 5000) + 5000;
    // this.subscription = interval(random_time_milli).subscribe(val => this.createPlanesTask(1));
    
}

ngOnDestroy() {
  // uncomment for the suprise
  // this.subscription.unsubscribe();
}
  

 render_arials() {
  const sky = this.elRef.nativeElement.querySelector('.sky');

    const planeImages = ['../../../../assets/img/home_img/icons8-ufo-67.png'];
   
    // Choose a random plane image from the array
    const planeImage = planeImages[Math.floor(Math.random() * planeImages.length)];
    //create random size for ufo
    const random_arial_size = Math.random() * 50 + 10 
    // Create a new div element for the plane
    const plane = this.renderer.createElement('div');
    // check if plane should start right or left of screen
    let randomX = Math.round(Math.random());
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


}
createPlanesTask(count: number)
{
       this.render_arials();
  
}


}

