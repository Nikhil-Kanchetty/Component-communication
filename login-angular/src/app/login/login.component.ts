import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private setData: UserDataService) { }

  ngOnInit() {
  }

  email: string = "";
  password: string = "";
  userNameErr ="";
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