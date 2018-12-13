import { Component, OnInit } from '@angular/core';
import { AdminGestionService } from '../admin-gestion.service'
import { UsersService } from '../../users/users.service'

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  private listUsers : Object[];
  constructor(private service: AdminGestionService, private users: UsersService) { }

  ngOnInit() {
  	this.service.getDesequilibre().subscribe(rez =>{
  		this.users.getUsers().subscribe(res =>{
  			this.listUsers = res;
  			console.log(this.listUsers);
  		});

  	});
  	
  	
  }

}
