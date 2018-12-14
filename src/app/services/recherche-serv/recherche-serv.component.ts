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
  private jourD : any = {"day":"01","month":"01","year":"2018"};
  private jourF : any = {"day":"31","month":"12","year":"2118"};
  private tags : string = "";
  private result : Object [];
  private submitted : boolean = false;

  constructor(private service: SearchServService) { }

  ngOnInit() {

  }
  onSearch(){
  	if(this.titre != undefined && this.min != undefined && this.max != undefined && this.jourD != undefined && this.jourF != undefined){
      let jour = this.jourD.day;
      let mois = this.jourD.month;
      let annee = this.jourD.year;
      let dd = jour+"/"+mois+"/"+annee;

      jour = this.jourF.day;
      mois = this.jourF.month;
      annee = this.jourF.year;
      let df = jour+"/"+mois+"/"+annee;

  		this.service.getService(this.titre,this.min,this.max,dd,df,this.tags).subscribe(res =>{
  			this.result = res;
            this.submitted=true;
  		});

  	}
  }

}
