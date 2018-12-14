import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.css']
})
export class ProfilUserComponent implements OnInit {

  private afficherFormBien : boolean =false; // false pour cacher true pour afficher
  private afficherFormService : boolean =false;

  //formulaire bien
  private nomBien : string;
  private descriptif : string;
  private prix: number =1;
  private tags_bien: Array<number>=[];
  private amBien: boolean =true;

  //info utilisateur
  private nom: string;
  private prenom: string;
  private email: string;
  private biens : Object[] = [];
  private role : string;
  private services : Object[] = [];

  private les_tags : Object[];
  private les_tags_biens_name : Object[] =[];
  private les_tags_services_name : Object[];
  private selected_tag;

  private la_date_choisi;
  private date_biens : Object[] =[];
  private date_biens_string :string ="";

  constructor(private service: UsersService,private router: Router) { }

  addBien(){
  	if(this.nomBien!="" && this.descriptif!="" && this.date_biens.length!=0){
  		let leBien = {"idProprio":this.email,"nom":this.nomBien,"descriptif":this.descriptif,"prixNeuf":this.prix,"tags":this.tags_bien};
		this.service.addBien(leBien).subscribe(res =>{
			let iDBien = res;
			let data;
			let date;
			let pmAm;
			let dateCourante : string;
			for(let i = 0 ; i<this.date_biens.length;i++){
				dateCourante=this.date_biens[i].toString();
				date = dateCourante.slice(0, 10);
				pmAm=dateCourante.slice(11, 13);
				data={"idBien":iDBien.toString(),"date":date,"AMPM":pmAm}; 
				this.service.addDispo(data).subscribe(res =>{});
			}
		  	this.update();
  			this.reset();
		});
  	}

  }

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
	  	this.nomBien="";
		this.descriptif="";
		this.les_tags_biens_name=[];
		this.les_tags_services_name=[];
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
	           });
	        });
  		});
  }

  reset(){
  	  this.date_biens_string = "";
	  this.nomBien="";
	  this.descriptif="";
	  this.prix=1;
	  this.amBien=true;
	  this.tags_bien=[];
	  this.les_tags_biens_name=[];
	  this.les_tags_services_name=[];
	  this.selected_tag=[];

	  this.la_date_choisi = [];
	  this.date_biens=[];

  }

  ajoutTagBien(){
  	if(this.selected_tag!=undefined){
	  	let un_tab = new Array;
	  	for(let i =0; i<this.selected_tag.length;i++){
	  		this.tags_bien.push(this.selected_tag[i].idTags);
	  		un_tab.push(this.selected_tag[i].nom)
	  	}
	  	this.les_tags_biens_name=un_tab;
  	}
  }

  ajoutDateBien(){
  	if(this.la_date_choisi!=undefined){
  		let amOrPm = "am";
  		let jour = this.la_date_choisi.day;
  		let mois = this.la_date_choisi.month;
  		let annee = this.la_date_choisi.year;
  		if(this.amBien==false)
  			amOrPm="pm";

  		let date = jour+"/"+mois+"/"+annee+":"+amOrPm;
  		this.date_biens.push(date);
	  	this.date_biens_string+=date+"\n";
  	}
  }

  update(){
    this.service.getBiensByEmail(this.email).subscribe(res =>{
	   this.biens = res;
        this.service.getServicesByEmail(this.email).subscribe(res =>{
			this.les_tags_biens_name=[];
			this.les_tags_services_name=[];
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
