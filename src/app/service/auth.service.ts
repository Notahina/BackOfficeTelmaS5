import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  formOption (use_authorization = false) {
    const options = { 
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : ''
      }
    };
    if (use_authorization) {
      options['headers']['Authorization'] = 'Bearer ' + localStorage.getItem("token");
    }
    return options; 
  } 
}
