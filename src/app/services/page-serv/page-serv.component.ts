import { Component, OnInit } from '@angular/core';
import { SearchServService } from '../search-serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-serv',
  templateUrl: './page-serv.component.html',
  styleUrls: ['./page-serv.component.css']
})
export class PageServComponent implements OnInit {

  private serv : any;
  private tags : string = "";
  private dispo : boolean = true;
  private indispo : boolean = false;
  private same : boolean = false;
  private done : boolean = false;

  constructor(private service : SearchServService, private route : Router) { }

  ngOnInit() {
    this.serv = this.service.serv;
  	if(this.serv == undefined)
  		this.route.navigate(['']);
  	else{
  		for(let tag of this.serv.tags){
  			this.tags+=tag.nom+" ";
  		}
  	}
  	if(JSON.parse(localStorage.getItem('user'))[0].email == this.serv.idProprio){
  		this.same=true;
  		this.dispo=false;
  	}
  	else{
	  	if(this.serv.disponibilites.length == 0){
	  		this.dispo = false;
	  		this.indispo = true;
	  	}
	  	if(this.serv.utilisations.length != 0){
		  	let date = this.serv.disponibilites[0].date;
		  	let ap = this.serv.disponibilites[0].AMPM;
		  	let used = this.serv.utilisations[0];

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
  	let data = {"email":JSON.parse(localStorage.getItem('user'))[0].email,"idService":this.serv.idService,"date":this.serv.disponibilites[0].date,"AMPM":this.serv.disponibilites[0].AMPM};
  	this.service.doEmprunt(data).subscribe(res=>{
  		console.log(res);
  		this.done = true;
  		this.dispo=false;
  		this.indispo = false;
  	});
  }

}
