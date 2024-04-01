import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = ""
  password = ""
  loader:boolean = false;
  constructor(private http: HttpClient) { }
  login(){
  this.loader = true
    this.http.get<any>(`https://webtechnologies.site/714/Abella/api/login.php?username=`+this.username+`&password=`+this.password)
        .subscribe((data: any) => {
          console.log(data)
          this.loader = false
          if(data.message=="no record")
            alert(data.message)
          else{
            alert(data.message)
          }
        });;
  }
  ngOnInit() {
  }

}
