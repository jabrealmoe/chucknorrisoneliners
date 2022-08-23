import { OnInit } from '@angular/core';
import { Joke } from '../joke/joke';
import { OnelinerService } from '../service/oneliner.service';
export declare class MainComponent implements OnInit {
    private _oneliner;
    joke: Joke | undefined;
    constructor(_oneliner: OnelinerService);
    ngOnInit(): void;
}
