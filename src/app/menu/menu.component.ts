import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, DoCheck {

  private nom: string;
  private prenom: string;
  private login: string;
  private isLogged: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  ngDoCheck(){
    	this.login = localStorage.getItem('user');
  		if(this.login != null){
        let item = JSON.parse(localStorage.getItem('user'))
        this.nom = item[0].nom;
        this.prenom = item[0].prenom;
  			this.isLogged=true;	
  		}
  		console.log(this.login);
  }
  logOut(){
  	this.isLogged = false;
    localStorage.removeItem('user');
  }

}
