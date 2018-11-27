import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
  		let observable: Observable<any> = this.http.get("http://localhost:8888/searchUser");
  		return observable;
  }
  addUser(mail:string, nom:string, prenom:string, mdp:string, role:string): Observable<any> {
  		let url= "http://localhost:8888/addUsers"
  		let data = {"mail":mail,"nom":nom,"prenom":prenom, "mdp":mdp,"role":role};

  		return this.http.post(url,data);
  }
}
