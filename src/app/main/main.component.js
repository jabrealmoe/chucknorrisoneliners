"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainComponent = void 0;
const core_1 = require("@angular/core");
let MainComponent = class MainComponent {
    constructor(_oneliner) {
        var _a;
        this._oneliner = _oneliner;
        console.log((_a = this.joke) === null || _a === void 0 ? void 0 : _a.value);
    }
    ngOnInit() {
        this._oneliner.getJoke()
            .subscribe(data => this.joke = data);
        console.log("yo");
    }
};
MainComponent = __decorate([
    core_1.Component({
        selector: 'app-main',
        templateUrl: './main.component.html',
        styleUrls: ['./main.component.css']
    })
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSx3Q0FBa0Q7QUFTbEQsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQUt4QixZQUFvQixTQUEwQjs7UUFBMUIsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFDNUMsT0FBTyxDQUFDLEdBQUcsT0FBQyxJQUFJLENBQUMsSUFBSSwwQ0FBRSxLQUFLLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO2FBQ3ZCLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNuQixDQUFDO0NBRUYsQ0FBQTtBQWZZLGFBQWE7SUFMekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7S0FDcEMsQ0FBQztHQUNXLGFBQWEsQ0FlekI7QUFmWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEpzb25wQ2xpZW50QmFja2VuZCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBKb2tlIH0gZnJvbSAnLi4vam9rZS9qb2tlJztcbmltcG9ydCB7IE9uZWxpbmVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2Uvb25lbGluZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tYWluJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21haW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYWluLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gIGpva2U6IEpva2UgfCB1bmRlZmluZWQ7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vbmVsaW5lcjogT25lbGluZXJTZXJ2aWNlKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5qb2tlPy52YWx1ZSlcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX29uZWxpbmVyLmdldEpva2UoKVxuICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLmpva2UgPSBkYXRhKTtcbiAgICBjb25zb2xlLmxvZyhcInlvXCIpXG4gIH1cblxufVxuIl19