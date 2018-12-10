import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SearchBiensService {

  //private _options = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http: HttpClient) { }

  getBiens(type: string,nom: string,min: string,max: string,semD: string,semF : string,tags : string): Observable<any>{
  	let url = "http://localhost:8888/searchBien?type="+type+"&nom="+nom+"&min="+min+"&max="+max+"&semD="+semD+"&semF="+semF;
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
