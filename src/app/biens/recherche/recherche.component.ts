import { Component, OnInit } from '@angular/core';
import { SearchBiensService } from '../search-biens.service'

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  private type: string;
  private nom: string;
  private min: number=1;
  private max: number=1000000;
  private jourD : any = {"day":"01","month":"01","year":"2018"};
  private jourF : any = {"day":"31","month":"12","year":"2118"};
  private tags : string = "";
  private result : Object [];
  private submitted : boolean = false;
  constructor(private service: SearchBiensService) { }

  ngOnInit() {
  }
  onSubmit(){
  	if(this.type != undefined && this.nom != undefined && this.min != undefined && this.max != undefined && this.jourD != undefined && this.jourF != undefined){

      let jour = this.jourD.day;
      let mois = this.jourD.month;
      let annee = this.jourD.year;
      let dd = jour+"/"+mois+"/"+annee;
      jour = this.jourF.day;
      mois = this.jourF.month;
      annee = this.jourF.year;
      let df = jour+"/"+mois+"/"+annee;
  		this.service.getBiens(this.type,this.nom,this.min,this.max,dd,df,this.tags).subscribe(res =>{
  			this.result = res;
        this.submitted=true;
  		});

  	}
  }

}
