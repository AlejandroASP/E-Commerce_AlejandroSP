import { Component } from '@angular/core';
import { MainCarouselComponent } from "./main-carousel/main-carousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
