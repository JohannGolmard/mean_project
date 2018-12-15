import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SearchBiensService {

  //private _options = new HttpHeaders({'Content-Type':'application/json'});
  public bien : any;
  constructor(private http: HttpClient) { }

  getBiens(nom: string,min: number,max: number,jourD: string,jourF : string,tags : string): Observable<any>{
  	let url = "http://localhost:8888/searchBien?nom="+nom+"&min="+min+"&max="+max+"&jourD="+jourD+"&jourF="+jourF;
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
