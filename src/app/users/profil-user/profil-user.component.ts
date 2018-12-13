import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.css']
})
export class ProfilUserComponent implements OnInit {

  private afficherFormBien : boolean =true; // false pour cacher true pour afficher
  private afficherFormService : boolean =false;

  //formulaire bien
  private nomBien : string;
  private descriptif : string;
  private prix: number =1;
  private tags: Array<number>;

  //info utilisateur
  private nom: string;
  private prenom: string;
  private email: string;
  private biens : Object[] = [];
  private role : string;
  private services : Object[] = [];

  private les_tags : Object[];
  private les_tags_biens : Object[];
  private les_tags_services : Object[];
  private selected_tag : Object[];

  constructor(private service: UsersService,private router: Router) { }

  addBien(){}

  formBien(){
  	if(this.afficherFormBien==false)
  		this.afficherFormBien=true;
  	else
  		this.afficherFormBien=false;
  }

  formService(){
  	if(this.afficherFormService==false)
  		this.afficherFormService=true;
  	else
  		this.afficherFormService=false;
  }

  ngOnInit() {
		this.les_tags_biens=[];
		this.les_tags_services=[];
		let item = JSON.parse(localStorage.getItem('user'));
        this.nom = item[0].nom;
        this.prenom = item[0].prenom;
        this.email = item[0].email;
        this.role = item[0].role;
        this.service.getBiensByEmail(this.email).subscribe(res =>{
			this.biens = res;
	        this.service.getServicesByEmail(this.email).subscribe(res =>{
	           this.services = res;
	           this.service.getTag().subscribe(res => {
	           		this.les_tags=res;
	           		console.log(res);
	           });
	        });
  		});
  }

  ajoutTagBien(){
  	this.les_tags_biens=this.selected_tag;
  	console.log(this.les_tags_biens);
  }

  update(){
    this.service.getBiensByEmail(this.email).subscribe(res =>{
	   this.biens = res;
        this.service.getServicesByEmail(this.email).subscribe(res =>{
			this.les_tags_biens=[];
			this.les_tags_services=[];
            this.services = res;
        });
  	});
  }

  supprimerBien(id:string){
    this.service.deleteBien(id).subscribe(res =>{
    	this.update();
    });
  }

  supprimerService(id:string){
    this.service.deleteService(id).subscribe(res =>{
    	this.update();
    });
  }

}
