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

  constructor(private service : SearchServService, private route : Router) { }

  ngOnInit() {
    this.serv = this.service.serv;
  	console.log(this.serv);
  	if(this.serv == undefined)
  		this.route.navigate(['']);
  	else{
  		for(let tag of this.serv.tags){
  			this.tags+=tag.nom+" ";
  		}
  	}
  	if(this.serv.utilisations.length != 0){
	  	let date = this.serv.disponibilites[0].date;
	  	let ap = this.serv.disponibilites[0].AMPM;
	  	let used = this.serv.utilisations[0];
	  	console.log(date+" "+ap+ " "+used);
	  	if(used.date === date){
	  		if(used.AMPM === ap){
	  			this.dispo = false;
	  		}
	  	}
  	}
  }

}
