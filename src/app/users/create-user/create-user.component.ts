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
  private submitted : boolean=false;
  constructor(private service: UsersService) { }

  ngOnInit() {
  }
  private added : Object[];
  onSubmit(){
  	if(this.mail != "" && this.mdp != "" && this.nom != "" && this.prenom != ""){
  		this.service.addUser(this.mail,this.nom,this.prenom,this.mdp).subscribe(res =>{
  			this.added = res;
  		});
	  	this.mail = "";
	  	this.mdp = "";
	  	this.nom = "";
	  	this.prenom = "";
	  	this.submitted = true;

  	}
  }

}
