import { Component, OnInit } from '@angular/core';
import { SearchBiensService } from '../search-biens.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-bien',
  templateUrl: './page-bien.component.html',
  styleUrls: ['./page-bien.component.css']
})
export class PageBienComponent implements OnInit {
  
  private bien : any;
  private tags : string = "";
  private dispo : boolean = true;

  constructor(private service : SearchBiensService, private route : Router) { }

  ngOnInit() {
  	this.bien = this.service.bien;
  	console.log(this.bien);
  	if(this.bien == undefined)
  		this.route.navigate(['']);
  	else{
  		for(let tag of this.bien.tags){
  			this.tags+=tag.nom+" ";
  		}
  	}
  	if(this.bien.utilisations.length != 0){
	  	let date = this.bien.disponibilites[0].date;
	  	let ap = this.bien.disponibilites[0].AMPM;
	  	let used = this.bien.utilisations[0];
	  	console.log(date+" "+ap+ " "+used);
	  	if(used.date === date){
	  		if(used.AMPM === ap){
	  			this.dispo = false;
	  		}
	  	}
  	}
  }

}
