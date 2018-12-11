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
  private semD: number=1;
  private semF : number=52;
  private tags : string = "";
  private result : Object [];
  private submitted : boolean = false;
  constructor(private service: SearchBiensService) { }

  ngOnInit() {
  	
  }
  onSubmit(){
  	if(this.type != undefined && this.nom != undefined && this.min != undefined && this.max != undefined && this.semD != undefined && this.semF != undefined){
  		this.service.getBiens(this.type,this.nom,this.min,this.max,this.semD,this.semF,this.tags).subscribe(res =>{
  			this.result = res;
              this.submitted=true;
  		});

  	}
  }

}
