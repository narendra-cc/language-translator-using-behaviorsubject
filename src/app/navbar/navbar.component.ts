import { Component, OnInit } from '@angular/core';
import { LangTransServiceService } from '../lang-trans-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  select_option : string = "english";
  lang: string;
  
  constructor(private _myservice: LangTransServiceService) { }

  ngOnInit() {
  	this._myservice.telecast.subscribe(lang => {
      this.lang = lang;

     this._myservice.getData(this.lang);
    });
  }

  setlang(){
    console.log("Selected Language : ", this.select_option);
    this._myservice.language_selected = this.select_option;
   
    this._myservice.setlanguage(this.select_option);
  }

}
