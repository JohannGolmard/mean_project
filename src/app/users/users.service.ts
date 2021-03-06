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

  addUser(mail:string, nom:string, prenom:string, mdp:string, ville:string, adresse:string, cp:string): Observable<any> {
  		let url= "http://localhost:8888/addUsers"
  		let data = {"email":mail,"nom":nom,"prenom":prenom, "mdp":mdp,"ville":ville,
    "adresse":adresse,"cp":cp,"rapport":50.000,"aNotifier":false};
  		//let options = new RequestOptions({headers:this._options});

  		return this.http.post(url,data);
  }

  getEmprunt(email:string): Observable<any>{
    let data={"email":email}
    let url = "http://localhost:8888/mesEmprunt";
    return this.http.post(url,data);
  }

  addBien(data): Observable<any>{
    let url = "http://localhost:8888/addBiens";
    return this.http.post(url,data);
  }

  addService(data): Observable<any>{
    let url = "http://localhost:8888/addServices";
    return this.http.post(url,data);
  }

  addDispo(data): Observable<any>{
    let url = "http://localhost:8888/dateBiens";
    return this.http.post(url,data);
  }

  loginIn(login:string, mdp:string): Observable<any> {
    let url = "http://localhost:8888/login";
    let data = {"email":login, "mdp":mdp};
    return this.http.post(url,data);
  }

  getTag(): Observable<any>{
      let url = "http://localhost:8888/tags";
      return this.http.post(url,{});
  }

  getBiensById(id:string): Observable<any>{
      let data = {"idBien":id};
      let url = "http://localhost:8888/biens";
      return this.http.post(url,data);
  }

  getServicesById(id:string): Observable<any>{
      let data = {"idService":id};
      let url = "http://localhost:8888/services";
      return this.http.post(url,data);
  }


  getBiensByEmail(email:string): Observable<any>{
      let data = {"idProprio":email};
      let url = "http://localhost:8888/biens";
      return this.http.post(url,data);
  }

  getServicesByEmail(email:string): Observable<any>{
      let data = {"idProprio":email};
      let url = "http://localhost:8888/services";
      return this.http.post(url,data);
  }

  deleteBien(id:string): Observable<any>{
    let data = {"idBien":id};
    let url = "http://localhost:8888/removeBiens";
    return this.http.post(url,data);
  }

  deleteService(id:string): Observable<any>{
    let data = {"idService":id};
    let url = "http://localhost:8888/removeServices";
    return this.http.post(url,data);
  }
}
