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
  private indispo : boolean = false;
  private same : boolean = false;
  private done : boolean = false;

  constructor(private service : SearchBiensService, private route : Router) { }

  ngOnInit() {
  	this.bien = this.service.bien;
  	if(this.bien == undefined)
  		this.route.navigate(['']);
  	else{
  		for(let tag of this.bien.tags){
  			this.tags+=tag.nom+" ";
  		}
  	}
  	if(JSON.parse(localStorage.getItem('user'))[0].email == this.bien.idProprio){
  		this.same=true;
  		this.dispo=false;
  	}
  	else{
	  	if(this.bien.disponibilites.length == 0){
	  		this.dispo = false;
	  		this.indispo = true;
	  	}
	  	if(this.bien.utilisations.length != 0){
		  	let date = this.bien.disponibilites[0].date;
		  	let ap = this.bien.disponibilites[0].AMPM;
		  	let used = this.bien.utilisations[0];

		  	if(used.date === date){
		  		if(used.AMPM === ap){
		  			this.dispo = false;
		  			this.indispo = true;
		  		}
		  	}
	  	}
  	}
  }
  emprunt(){
  	let data = {"email":JSON.parse(localStorage.getItem('user'))[0].email,"idBien":this.bien.idBien,"date":this.bien.disponibilites[0].date,"AMPM":this.bien.disponibilites[0].AMPM};
  	this.service.doEmprunt(data).subscribe(res=>{
  		console.log(res);
  		this.done = true;
  		this.dispo=false;
  		this.indispo = false;
  	});
  }

}
