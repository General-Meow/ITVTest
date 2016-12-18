import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  postData: string;
  postResult: string;

  private postURL: string = 'http://mockbin.org/bin/5f4060a1-d7e7-4b64-80c0-061c091f977a'; //this would be the proper url
  constructor(private http: Http) { }

  ngOnInit() {
  }

  submit(form){
    console.log("About to post form");
    this.postData = JSON.stringify(form.value);

    this.http.post(this.postURL, this.postData, options)
    .subscribe((result) => {
      console.log(result.text());
      this.postResult = result.text();
    });
  }

}
