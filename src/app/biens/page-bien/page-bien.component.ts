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
  private date : string[] = [];
  private AMPM : string[] = [];
  public isCollapsed : boolean = false;

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
  	if(JSON.parse(sessionStorage.getItem('user'))[0].email == this.bien.idProprio){
  		this.same=true;
  		this.dispo=false;
  	}
  	else{
	  	if(this.bien.disponibilites.length == 0){
	  		this.dispo = false;
	  		this.indispo = true;
	  	}
	  	else{ 
	  		for(let ladate of this.bien.disponibilites){
	  			this.date.push(ladate.date);
	  			this.AMPM.push(ladate.AMPM);
	  			if(this.bien.utilisations.length != 0){
		  			for(let used of this.bien.utilisations){
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
  	let data = {"email":JSON.parse(sessionStorage.getItem('user'))[0].email,"idBien":this.bien.idBien,"date":date,"AMPM":AMPM};
  	this.service.doEmprunt(data).subscribe(res=>{
  		this.done = true;
  		this.dispo=false;
  		this.indispo = false;
  	});
  }

}
