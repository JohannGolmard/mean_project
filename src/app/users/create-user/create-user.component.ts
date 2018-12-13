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
  private ville: string;
  private adresse: string;
  private cp: string;
  private notAdded: boolean=true;

  private submitted : boolean=false;
  constructor(private service: UsersService) {}

  ngOnInit() {
  }

  onSubmit(){
  	if(this.mail != undefined && this.mdp != undefined && this.nom != undefined && this.prenom != undefined && this.ville != undefined && this.adresse != undefined && this.cp != undefined){
  		this.service.addUser(this.mail,this.nom,this.prenom,this.mdp,this.ville,this.adresse,this.cp).subscribe(res =>{
  			console.log(res);
        if(res!="Inscription réussie"){
          this.submitted = true;
        }
        else{
          this.notAdded=false;
        }
  		});
	  	this.mail = "";
	  	this.mdp = "";
	  	this.nom = "";
	  	this.prenom = "";
      this.ville = "";
      this.adresse = "";
      this.cp = "";

  	}
  }

}
