import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from '../joke/joke'

@Injectable({
  providedIn: 'root'
})
export class OnelinerService {

  private _baseUrl:string = "https://api.chucknorris.io/jokes/random";
  constructor(private _http: HttpClient) { }

  getJoke(): Observable<Joke>{
    console.log("Hello jokes")
    return this._http.get<Joke>(this._baseUrl);
  }
}
