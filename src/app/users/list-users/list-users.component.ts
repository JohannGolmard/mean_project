import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {

  constructor(private service: UsersService) { }
  private listUsers : Object[];
  ngOnInit() {
  	this.service.getUsers().subscribe(res =>{
  		this.listUsers = res;
  	});
  }

}
