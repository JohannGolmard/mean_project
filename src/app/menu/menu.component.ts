import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, DoCheck {

  private login: string;
  private isLogged: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  ngDoCheck(){
    	this.login = localStorage.getItem('user');
  		if(this.login != null){
  			this.isLogged=true;	
  		}
  		console.log(this.login);
  }
  logOut(){
  	this.isLogged = false;
    localStorage.removeItem('user');
  }

}
