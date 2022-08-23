"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
const core_1 = require("@angular/core");
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'chuck-norris-jokes';
        this.images = [
            {
                imageSrc: 'https://burst.shopifycdn.com/photos/laptop-from-above.jpg',
                imageAlt: 'nature1'
            },
            {
                imageSrc: 'https://media.istockphoto.com/photos/coach-drawing-american-football-game-playbook-picture-id1366672302?b=1&k=20&m=1366672302&s=170667a&w=0&h=icvKGPFCVclcwsj0l3D91o2MStAYTEGRLijEs2JiCwk=',
                imageAlt: 'nature2'
            },
            {
                imageSrc: 'https://traveloregon.com/wp-content/uploads/2016/10/MtHoodVillages-07-2000.jpg',
                imageAlt: 'nature3'
            },
            {
                imageSrc: 'https://miro.medium.com/max/1400/1*3Fxk3b8h1kvKJFe5gVf98A.png',
                imageAlt: 'nature4'
            },
            {
                imageSrc: 'https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:786fd7a8-9b53-4b73-af03-fb1b76992638/SMT-2480_JiraAlign_Screenshots-01-ProgramManagement.png',
                imageAlt: 'Jira Strategy'
            },
            {
                imageSrc: 'https://www.worldofagile.com/wp-content/uploads/2018/03/DevOpsToolchain.png',
                imageAlt: 'nature5'
            },
        ];
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsd0NBQTBDO0FBTzFDLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFBekI7UUFDRSxVQUFLLEdBQUcsb0JBQW9CLENBQUM7UUFFN0IsV0FBTSxHQUFHO1lBQ1A7Z0JBRUUsUUFBUSxFQUFFLDJEQUEyRDtnQkFDckUsUUFBUSxFQUFFLFNBQVM7YUFDcEI7WUFDRDtnQkFDRSxRQUFRLEVBQUUsNExBQTRMO2dCQUN0TSxRQUFRLEVBQUUsU0FBUzthQUNwQjtZQUNEO2dCQUNFLFFBQVEsRUFBRSxnRkFBZ0Y7Z0JBQzFGLFFBQVEsRUFBRSxTQUFTO2FBQ3BCO1lBQ0Q7Z0JBQ0UsUUFBUSxFQUFFLCtEQUErRDtnQkFDekUsUUFBUSxFQUFFLFNBQVM7YUFDcEI7WUFDRDtnQkFDRSxRQUFRLEVBQUUsaUtBQWlLO2dCQUMzSyxRQUFRLEVBQUUsZUFBZTthQUMxQjtZQUNEO2dCQUNFLFFBQVEsRUFBRSw2RUFBNkU7Z0JBQ3ZGLFFBQVEsRUFBRSxTQUFTO2FBQ3BCO1NBQ0YsQ0FBQTtJQUNILENBQUM7Q0FBQSxDQUFBO0FBOUJZLFlBQVk7SUFMeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7S0FDbkMsQ0FBQztHQUNXLFlBQVksQ0E4QnhCO0FBOUJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FwcC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgdGl0bGUgPSAnY2h1Y2stbm9ycmlzLWpva2VzJztcblxuICBpbWFnZXMgPSBbXG4gICAge1xuXG4gICAgICBpbWFnZVNyYzogJ2h0dHBzOi8vYnVyc3Quc2hvcGlmeWNkbi5jb20vcGhvdG9zL2xhcHRvcC1mcm9tLWFib3ZlLmpwZycsXG4gICAgICBpbWFnZUFsdDogJ25hdHVyZTEnXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZVNyYzogJ2h0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL3Bob3Rvcy9jb2FjaC1kcmF3aW5nLWFtZXJpY2FuLWZvb3RiYWxsLWdhbWUtcGxheWJvb2stcGljdHVyZS1pZDEzNjY2NzIzMDI/Yj0xJms9MjAmbT0xMzY2NjcyMzAyJnM9MTcwNjY3YSZ3PTAmaD1pY3ZLR1BGQ1ZjbGN3c2owbDNEOTFvMk1TdEFZVEVHUkxpakVzMkppQ3drPScsXG4gICAgICBpbWFnZUFsdDogJ25hdHVyZTInXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZVNyYzogJ2h0dHBzOi8vdHJhdmVsb3JlZ29uLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC9NdEhvb2RWaWxsYWdlcy0wNy0yMDAwLmpwZycsXG4gICAgICBpbWFnZUFsdDogJ25hdHVyZTMnXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZVNyYzogJ2h0dHBzOi8vbWlyby5tZWRpdW0uY29tL21heC8xNDAwLzEqM0Z4azNiOGgxa3ZLSkZlNWdWZjk4QS5wbmcnLFxuICAgICAgaW1hZ2VBbHQ6ICduYXR1cmU0J1xuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2VTcmM6ICdodHRwczovL3dhYy1jZG4tMi5hdGxhc3NpYW4uY29tL2ltYWdlL3VwbG9hZC9mX2F1dG8scV9hdXRvL2RhbS9qY3I6Nzg2ZmQ3YTgtOWI1My00YjczLWFmMDMtZmIxYjc2OTkyNjM4L1NNVC0yNDgwX0ppcmFBbGlnbl9TY3JlZW5zaG90cy0wMS1Qcm9ncmFtTWFuYWdlbWVudC5wbmcnLFxuICAgICAgaW1hZ2VBbHQ6ICdKaXJhIFN0cmF0ZWd5J1xuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2VTcmM6ICdodHRwczovL3d3dy53b3JsZG9mYWdpbGUuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzAzL0Rldk9wc1Rvb2xjaGFpbi5wbmcnLFxuICAgICAgaW1hZ2VBbHQ6ICduYXR1cmU1J1xuICAgIH0sXG4gIF1cbn1cbiJdfQ==