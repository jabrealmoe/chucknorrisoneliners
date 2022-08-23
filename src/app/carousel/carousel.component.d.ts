import { OnInit } from '@angular/core';
interface carouselImage {
    imageSrc: string;
    imageAlt: string;
}
export declare class CarouselComponent implements OnInit {
    constructor();
    images: carouselImage[];
    indicators: boolean;
    selectedIndex: number;
    ngOnInit(): void;
    selectImage(i: number): void;
}
export {};
