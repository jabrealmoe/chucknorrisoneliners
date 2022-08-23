"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnelinerService = void 0;
const core_1 = require("@angular/core");
let OnelinerService = class OnelinerService {
    constructor(_http) {
        this._http = _http;
        this._baseUrl = "https://api.chucknorris.io/jokes/random";
    }
    getJoke() {
        console.log("Hello jokes");
        return this._http.get(this._baseUrl);
    }
};
OnelinerService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], OnelinerService);
exports.OnelinerService = OnelinerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lbGluZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9uZWxpbmVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0Esd0NBQTJDO0FBTzNDLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFHMUIsWUFBb0IsS0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUQ3QixhQUFRLEdBQVUseUNBQXlDLENBQUM7SUFDM0IsQ0FBQztJQUUxQyxPQUFPO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUMxQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBQ0YsQ0FBQTtBQVRZLGVBQWU7SUFIM0IsaUJBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxlQUFlLENBUzNCO0FBVFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSm9rZSB9IGZyb20gJy4uL2pva2Uvam9rZSdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgT25lbGluZXJTZXJ2aWNlIHtcblxuICBwcml2YXRlIF9iYXNlVXJsOnN0cmluZyA9IFwiaHR0cHM6Ly9hcGkuY2h1Y2tub3JyaXMuaW8vam9rZXMvcmFuZG9tXCI7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIGdldEpva2UoKTogT2JzZXJ2YWJsZTxKb2tlPntcbiAgICBjb25zb2xlLmxvZyhcIkhlbGxvIGpva2VzXCIpXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PEpva2U+KHRoaXMuX2Jhc2VVcmwpO1xuICB9XG59XG4iXX0=