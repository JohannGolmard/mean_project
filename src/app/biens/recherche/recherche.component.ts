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
  private min: string;
  private max: string;
  private semD: string;
  private semF : string;
  private tags : Object [];
  private result : Object [];
  constructor(private service: SearchBiensService) { }

  ngOnInit() {
  	this.service.getBiens(this.type,this.nom,this.min,this.max,this.semD,this.semF,this.tags).subscribe(res =>{
  		this.result = res;
  	});
  }

}
