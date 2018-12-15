import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SearchServService {

  public serv : any;

  constructor(private http: HttpClient) { }

  getService(titre: string,min: number,max: number,jourD: string,jourF : string,tags : string): Observable<any>{
  	
  	let url = "http://localhost:8888/searchService?titre="+titre+"&min="+min+"&max="+max+"&jourD="+jourD+"&jourF="+jourF;
    let tag = tags.split(';');
  	if(tags!=""){
      let tag = tags.split(';');
      for(let i=0;i<tag.length;i++){
        url= url+"&tags="+tag[i];
      }
    }
  	let observable: Observable<any> = this.http.get(url);
  	return observable;
  }
  doEmprunt(data:any): Observable<any>{
    let url = "http://localhost:8888/emprunt";
    return this.http.post(url,data);
  }
}
