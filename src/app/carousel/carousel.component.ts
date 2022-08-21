import {Component, Input, OnInit} from '@angular/core';


interface carouselImage{
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  @Input() images: carouselImage[] = []
  @Input() indicators = true;
  selectedIndex = 0;
  ngOnInit(): void {
  }

  selectImage(i: number): void {
    this.selectedIndex = i;
  }
}
