import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-http-client-test',
  templateUrl: './http-client-test.component.html',
  styleUrls: ['./http-client-test.component.css']
})
export class HttpClientTestComponent implements OnInit {
  resultadoPeticion: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.get();
  }

  get(){
    this.http.get('https://jsonplaceholder.typicode.com/posts')
        .subscribe( data => { this.resultadoPeticion = data});
  }

  post(){
    this.http.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'Prevision viernes',
      body: 'Buen Clima',
      userId: 1
    }).subscribe (data => {this.resultadoPeticion = data});
    
  }

}
