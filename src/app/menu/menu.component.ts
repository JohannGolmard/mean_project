import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private login: string;
  private isLogged: boolean = false;
  constructor() { }

  ngOnInit() {
  	this.login = localStorage.getItem('user');
  	if(this.login != null)
  		this.isLogged=true;

  }
  logOut(){
  	this.isLogged = false;
    localStorage.removeItem('user');
  }

}
