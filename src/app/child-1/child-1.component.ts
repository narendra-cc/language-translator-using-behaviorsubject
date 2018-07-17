import { Component, OnInit } from '@angular/core';
import { LangTransServiceService } from '../lang-trans-service.service';

@Component({
  selector: 'app-child-1',
  templateUrl: './child-1.component.html',
  styleUrls: ['./child-1.component.css']
})
export class Child1Component implements OnInit {
 
  first_name;
  last_name;
  email_id;
  address;
  pincode;

  data;
  lang;

  constructor(private _myservice: LangTransServiceService) { }

  ngOnInit() {
    
    // this._myservice.telecast.subscribe(lang => this.lang = lang);
    // console.log("TEST : ", this._myservice.getData(this.lang));
    // this.initValues();

    this._myservice.telecast.subscribe(lang => {
      this.lang = lang;
  
     this.data = this._myservice.getData(this.lang);
     console.log('TEST : ', this._myservice.getData(this.lang));
     this.initValues();
    });
  }

  initValues() {
    // this.data = this._myservice.getData(this.lang);

     this.first_name = this.data.first_name;
     this.last_name = this.data.last_name;
     this.email_id = this.data.email_id;
     this.address = this.data.address;
     this.pincode = this.data.pincode;
  }

  

}
