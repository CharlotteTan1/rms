import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public http:HttpClient) { }
  array:any = []
  ngOnInit() {
    let url = "https://webtechnologies.site/714/Abella/api/getProducts.php";
    this.http.get<any>(url).subscribe(
      (data:any) => {
        if (data.data)
        {
          this.array = data.data
        }
        console.log(data)
      }
    )
  }

}
