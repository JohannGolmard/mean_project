import { Component, OnInit } from '@angular/core';
import { SearchServService } from '../search-serv.service'

@Component({
  selector: 'app-recherche-serv',
  templateUrl: './recherche-serv.component.html',
  styleUrls: ['./recherche-serv.component.css']
})
export class RechercheServComponent implements OnInit {
  private titre: string;
  private min: string;
  private max: string;
  private semD: string;
  private semF : string;
  private tags : string = "";
  private result : Object [];
  private submitted : boolean = false;

  constructor(private service: SearchServService) { }

  ngOnInit() {

  }
  onSubmit(){
  	if(this.titre != "" && this.min != "" && this.max != "" && this.semD != "" && this.semF != ""){
  		this.service.getService(this.titre,this.min,this.max,this.semD,this.semF,this.tags).subscribe(res =>{
  			this.result = res;
            this.submitted=true;
  		});

  	}
  }

}
