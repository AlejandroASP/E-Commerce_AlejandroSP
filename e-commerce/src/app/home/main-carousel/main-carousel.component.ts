import { Component } from '@angular/core';
import { homeCarouselData } from '../../../Data/homeCarouselData';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-main-carousel',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './main-carousel.component.html',
  styleUrl: './main-carousel.component.css'
})
export class MainCarouselComponent {
  carouselData: any;
  
  currentSlide = 0; // contador de slides

  ngOnInit(){
    this.carouselData = homeCarouselData
    this.autoPlay();
  }

  // encargado de mover automaticamente las slides
  autoPlay(){
    setInterval(() =>{
      this.nextSlide();
    },2000 )
  }

  // encargado de mover las slides
  nextSlide(){
    this.currentSlide = (this.currentSlide + 1) % this.carouselData.length;
  }
}