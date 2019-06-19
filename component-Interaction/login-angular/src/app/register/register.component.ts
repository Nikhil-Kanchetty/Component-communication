import { Component, OnInit, Input } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName: string = '';
  firstNameErr: string ='';
  lastName: string = '';
  lastNameErr: string = '';
  emailId: string = '';
  emailIdErr: string ='';
  password: string = '';
  passwordErr: string = '';
  confirmPassword: string = '';
  confirmPasswordErr: string = '';
  Data = { name:'', pwd: ''};
  constructor(private getData: UserDataService) { }

  ngOnInit() {
  this.Data = this.getData.getValues();
  this.emailId = this.Data.name;
  this.password = this.Data.pwd;
}  

  regValidation() {
    if(this.firstName == "") {
      this.firstNameErr = "This field is required";
    } else {
      this.firstNameErr ="";
    }
    if(this.lastName == "") {
      this.lastNameErr = "This field is required";
    } else {
      this.lastNameErr ="";
    }
    if(this.emailId == "") {
      this.emailIdErr = "This field is required";
    } else {
      this.emailIdErr ="";
    }
    if(this.password == "") {
      this.passwordErr = "This field is required";
    } else {
      this.passwordErr ="";
    }
    if(this.confirmPassword == "") {
      this.confirmPasswordErr = "This field is required";
    } else {
      this.confirmPasswordErr ="";
    }
  }
}