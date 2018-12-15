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
  }

}
