import { gsap } from 'gsap';
import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-my-animation',
  templateUrl: './my-animation.component.html',
  styleUrls: ['./my-animation.component.scss']
})
export class MyAnimationComponent {
  ngOnInit(){
    console.log('component has been initialized!')
    gsap.to('.box', {
      x: '10px',
      y: '10px',
      rotation: -160,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

  }
  animateElement(){
    gsap.fromTo('.my-element',{ opacity: 0, x: -100}, { opacity: 1, x: 0, duration: 1});
  }
}
