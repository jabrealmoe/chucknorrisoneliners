"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselModule = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const carousel_component_1 = require("./carousel.component");
let CarouselModule = class CarouselModule {
};
CarouselModule = __decorate([
    core_1.NgModule({
        declarations: [
            carousel_component_1.CarouselComponent
        ],
        imports: [
            common_1.CommonModule
        ],
        exports: [
            carousel_component_1.CarouselComponent
        ]
    })
], CarouselModule);
exports.CarouselModule = CarouselModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2Fyb3VzZWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHdDQUF5QztBQUN6Qyw0Q0FBK0M7QUFDL0MsNkRBQXlEO0FBZXpELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7Q0FBSSxDQUFBO0FBQWxCLGNBQWM7SUFYMUIsZUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osc0NBQWlCO1NBQ2xCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AscUJBQVk7U0FDYjtRQUNELE9BQU8sRUFBRTtZQUNQLHNDQUFpQjtTQUNsQjtLQUNGLENBQUM7R0FDVyxjQUFjLENBQUk7QUFBbEIsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJvdXNlbC5jb21wb25lbnQnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2Fyb3VzZWxDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ2Fyb3VzZWxDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbE1vZHVsZSB7IH1cbiJdfQ==