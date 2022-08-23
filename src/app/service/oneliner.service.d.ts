import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Joke } from '../joke/joke';
export declare class OnelinerService {
    private _http;
    private _baseUrl;
    constructor(_http: HttpClient);
    getJoke(): Observable<Joke>;
}
