import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AdminGestionService {

  constructor(private http: HttpClient) { }

  getDesequilibre(): Observable<any>{
  	let observable: Observable<any> = this.http.get("http://localhost:8888/desiquilibre");
  	return observable;
  }
}
