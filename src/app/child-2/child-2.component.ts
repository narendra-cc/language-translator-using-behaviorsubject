import { Component, OnInit } from '@angular/core';
import { LangTransServiceService } from '../lang-trans-service.service';

@Component({
  selector: 'app-child-2',
  templateUrl: './child-2.component.html',
  styleUrls: ['./child-2.component.css']
})
export class Child2Component implements OnInit {

  lang: string;
  constructor(private _myservice: LangTransServiceService) { }

  ngOnInit() {
  	this._myservice.telecast.subscribe(lang => this.lang = lang);
  }

}

