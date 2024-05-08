import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  firstname = ""
  middlename = ""
  lastname = ""
  email = ""
  username = ""
  password = ""
  confirmpassword = ""

  constructor(public http:HttpClient) { }

  ngOnInit() {
  }

  validation(){
    let message ='';
    if(this.firstname=='')
      message += "First name is required\n"
    if(this.middlename=='')
      message += "Middle name is required\n"
    if(this.lastname=='')
      message += "Last name is required\n"
    if(this.email=='')
      message += "E-mail is required\n"
    if(this.username=='')
      message += "Username is required\n"
    if(this.password=='')
      message += "Password is required\n"
    if(this.confirmpassword=='')
      message += "Confirm password is required\n"
    if(message == '')
      return true

    alert(message)
      return false;
  }
  addData(){
    let formData = new FormData();
    formData.append('username',this.username)
    formData.append('fullname',this.firstname + this.middlename + this.lastname)
    formData.append('email',this.email)
    formData.append('password',this.password)
    let url="https://webtechnologies.site/714/Abella/api/registration.php"
    this.http.post<any>(url,formData).subscribe(
      (data:any)=>{
        console.log(data)
      }
    )  
  }

  registration(){
    if(this.validation()){
      this.addData()
    }
  }
}