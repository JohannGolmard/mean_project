import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SearchServService {

  constructor(private http: HttpClient) { }

  getService(titre: string,min: number,max: number,semD: number,semF : number,tags : string): Observable<any>{
  	
  	let url = "http://localhost:8888/searchService?titre="+titre+"&min="+min+"&max="+max+"&semD="+semD+"&semF="+semF;
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
}
