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
  private date : string[] = [];
  private AMPM : string[] = [];
  public isCollapsed : boolean = false;

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
  	if(JSON.parse(sessionStorage.getItem('user'))[0].email == this.serv.idProprio){
  		this.same=true;
  		this.dispo=false;
  	}
  	else{
	  	if(this.serv.disponibilites.length == 0){
	  		this.dispo = false;
	  		this.indispo = true;
	  	}
	  	else{ 
	  		for(let ladate of this.serv.disponibilites){
	  			this.date.push(ladate.date);
	  			this.AMPM.push(ladate.AMPM);
	  			if(this.serv.utilisations.length != 0){
		  			for(let used of this.serv.utilisations){
		  				if(used === ladate.date){
		  					if(used.AMPM === ladate.AMPM){
		  						this.dispo = false;
			  					this.indispo = true;
		  					}
		  				}
		  			}
	  			}
	  		}
	  	}
  	}
  }
  emprunt(date:any,AMPM:any){
  	this.isCollapsed = !this.isCollapsed;
  	let data = {"email":JSON.parse(sessionStorage.getItem('user'))[0].email,"idService":this.serv.idService,"date":date,"AMPM":AMPM};
  	this.service.doEmprunt(data).subscribe(res=>{
  		this.done = true;
  		this.dispo=false;
  		this.indispo = false;
  	});
  }

}
