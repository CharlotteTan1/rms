import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {


  firstName = ''
middleName = ''
lastName = ''
contactNumber = ''
emailAddress = ''
username = ''
password = ''
confirmPassword = ''
  constructor() { }

  ngOnInit() {
  }

}
