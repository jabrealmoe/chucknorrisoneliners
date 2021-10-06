import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke/joke';
import { OnelinerService } from '../service/oneliner.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  joke: Joke | undefined;
  
  constructor(private _oneliner: OnelinerService) {
    console.log(this.joke?.value)
  }

  ngOnInit(): void {
    this._oneliner.getJoke()
    .subscribe(data => this.joke = data);
    console.log("yo")
  }

}
