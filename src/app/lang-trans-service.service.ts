import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable()
export class LangTransServiceService {
  language_selected = "english";

  language_selected_1 = new BehaviorSubject<string>("english");
  telecast = this.language_selected_1.asObservable();

  languages = {
                english : {
                            first_name : "First Name",
                            last_name : "Last Name",
                            email_id : "Email",
                            address : "Address",
                            pincode : "Pincode",
                          },
                spanish :  {
                            first_name : "Nombre de pila",
                            last_name : "Apellido",
                            email_id : "Email",
                            address : "Dirección",
                            pincode : "Código PIN",
                          },
                french :  {
                            first_name : "Prénom",
                            last_name : "Nom de famille",
                            email_id : "Email",
                            address : "Adresse",
                            pincode : "Code PIN",
                          }
              }
   
  constructor() { 
    console.log("LANG == ", this.languages.english);

  }

  setlanguage(new_lang) {
    this.language_selected_1.next(new_lang);
  }

  getData(lang) {
    return this.languages[lang];
    // if(this.language_selected == "english"){
    //   return this.languages.english;
    // }
    // if(this.language_selected == "spanish"){
    //   return this.languages.spanish;
    // }
    // if(this.language_selected == "french"){
    //   return this.languages.french;
    // }
  }
}