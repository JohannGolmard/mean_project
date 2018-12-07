import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

	private _options = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
  		let observable: Observable<any> = this.http.get("http://localhost:8888/users");
  		return observable;
  }
  addUser(mail:string, nom:string, prenom:string, mdp:string): Observable<any> {
  		let url= "http://localhost:8888/addUsers"
  		let data = {"email":mail,"nom":nom,"prenom":prenom, "mdp":mdp};
  		//let options = new RequestOptions({headers:this._options});

  		return this.http.post(url,data);
  }
  loginIn(login:string, mdp:string): Observable<any> {
    let url = "http://localhost:8888/login";
    let data = {"email":login, "mdp":mdp};
    return this.http.post(url,data);
  }

  getBiensById(email:string): Observable<any>{
      let data = {"idProprio":email};
      let url = "http://localhost:8888/biens";
      return this.http.post(url,data);
  }
}
