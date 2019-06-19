import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  userName: string = "";
  password: string = "";

  setValues(userName, Password) {
    this.userName = userName;
    this.password = Password;
  }

  getValues() {
    return { name:this.userName, pwd: this.password };
  }

}
