"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselComponent = void 0;
const core_1 = require("@angular/core");
let CarouselComponent = class CarouselComponent {
    constructor() {
        this.images = [];
        this.indicators = true;
        this.selectedIndex = 0;
    }
    ngOnInit() {
    }
    selectImage(i) {
        this.selectedIndex = i;
    }
};
__decorate([
    core_1.Input()
], CarouselComponent.prototype, "images", void 0);
__decorate([
    core_1.Input()
], CarouselComponent.prototype, "indicators", void 0);
CarouselComponent = __decorate([
    core_1.Component({
        selector: 'app-carousel',
        templateUrl: './carousel.component.html',
        styleUrls: ['./carousel.component.css']
    })
], CarouselComponent);
exports.CarouselComponent = CarouselComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2Fyb3VzZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHdDQUF1RDtBQVl2RCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQUU1QjtRQUVTLFdBQU0sR0FBb0IsRUFBRSxDQUFBO1FBQzVCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDM0Isa0JBQWEsR0FBRyxDQUFDLENBQUM7SUFKRixDQUFDO0lBS2pCLFFBQVE7SUFDUixDQUFDO0lBRUQsV0FBVyxDQUFDLENBQVM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztDQUNGLENBQUE7QUFUVTtJQUFSLFlBQUssRUFBRTtpREFBNkI7QUFDNUI7SUFBUixZQUFLLEVBQUU7cURBQW1CO0FBTGhCLGlCQUFpQjtJQUw3QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGNBQWM7UUFDeEIsV0FBVyxFQUFFLDJCQUEyQjtRQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztLQUN4QyxDQUFDO0dBQ1csaUJBQWlCLENBYTdCO0FBYlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbmludGVyZmFjZSBjYXJvdXNlbEltYWdle1xuICBpbWFnZVNyYzogc3RyaW5nO1xuICBpbWFnZUFsdDogc3RyaW5nO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNhcm91c2VsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2Fyb3VzZWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIEBJbnB1dCgpIGltYWdlczogY2Fyb3VzZWxJbWFnZVtdID0gW11cbiAgQElucHV0KCkgaW5kaWNhdG9ycyA9IHRydWU7XG4gIHNlbGVjdGVkSW5kZXggPSAwO1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIHNlbGVjdEltYWdlKGk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGk7XG4gIH1cbn1cbiJdfQ==