import { Component, OnInit } from '@angular/core';
import { SearchServService } from '../search-serv.service'

@Component({
  selector: 'app-recherche-serv',
  templateUrl: './recherche-serv.component.html',
  styleUrls: ['./recherche-serv.component.css']
})
export class RechercheServComponent implements OnInit {
  private titre: string;
  private min: number=1;
  private max: number=1000000;
  private semD: number=1;
  private semF : number=52;
  private tags : string = "";
  private result : Object [];
  private submitted : boolean = false;

  constructor(private service: SearchServService) { }

  ngOnInit() {

  }
  onSearch(){
  	if(this.titre != undefined && this.min != undefined && this.max != undefined && this.semD != undefined && this.semF != undefined){
  		this.service.getService(this.titre,this.min,this.max,this.semD,this.semF,this.tags).subscribe(res =>{
  			this.result = res;
            this.submitted=true;
  		});

  	}
  }

}
