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
  private isAdmin: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  ngDoCheck(){
    	this.login = sessionStorage.getItem('user');
  		if(this.login != null){
        let item = JSON.parse(sessionStorage.getItem('user'))
        this.nom = item[0].nom;
        this.prenom = item[0].prenom;
  			this.isLogged=true;	
        if(item[0].role == "admin"){
          this.isAdmin=true;
        }
  		}
  }
  logOut(){
  	this.isLogged = false;
    sessionStorage.removeItem('user');
    this.isAdmin=false;
  }
}
