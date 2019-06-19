import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { userDetails} from './userObject';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, userDetails {

  constructor(private setData: UserDataService) { }

  ngOnInit() {
  }

  email: string = "";
  password: string = "";
  userNameErr : string ="";
  passErr="";
  

  validation() {
    console.log(this.email, this.password);
    if(this.email == ""){
      this.userNameErr = "This field is required";
    } else {
      this.userNameErr="";
    }
    if(this.password == ""){
      this.passErr = "This field is required";
    } else {
      this.passErr ="";
    }
  }

  signUp() {
    this.setData.setValues(this.email, this.password);
  }
}