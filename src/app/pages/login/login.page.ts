import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = ""
  password = ""
  loader:boolean = false;

  constructor(private http: HttpClient, public _router: Router) {
    
   }

  login(){
  this.loader = true
    this.http.get<any>(`https://webtechnologies.site/714/Abella/api/login.php?username=`+this.username+`&password=`+this.password)
        .subscribe((data: any) => {
          console.log(data)
          this.loader = false
          if(data.message=="no record")
            alert(data.message)
          else{
            this._router.navigate(['home'])
          }
        });;
  }
  ngOnInit() {
  }

}