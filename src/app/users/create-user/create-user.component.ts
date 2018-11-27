import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
	
 private resp : Object[];

  private mail: string;
  private mdp: string;
  private nom: string;
  private prenom: string;
  private role: string;
  constructor(private service: UsersService) { }

  ngOnInit() {
  }
  private fuckt : Object[];
  onSubmit(){
  	this.service.addUser(this.mail,this.nom,this.prenom,this.mdp,this.role).subscribe(res =>{
  			this.fuckt = res;
  		});
  	/*this.service.getUsers().subscribe(res =>{
  		this.listUsers = res;
  	});*/
  }

}
