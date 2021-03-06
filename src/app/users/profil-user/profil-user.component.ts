import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { SearchBiensService } from '../../biens/search-biens.service';
import { SearchServService } from '../../services/search-serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.css']
})
export class ProfilUserComponent implements OnInit {
  
  //boutons pour cacher 
  private afficherFormBien : boolean =false; // false pour cacher true pour afficher
  private afficherFormService : boolean =false;

  private afficherTabBien : boolean = true;
  private afficherTabService : boolean = true;

  //formulaire bien
  private nomBien : string;
  private descriptif : string;
  private prix: number =1;
  private tags_bien: Array<number>=[];
  private amBien: boolean =true;

  //formulaire service
  private titreService : string;
  private descService :string;
  private experience : string;
  private prixService: number =1;
  private tags_service: Array<number>=[];
  private amService: boolean =true;

  //info utilisateur
  private nom: string;
  private prenom: string;
  private email: string;
  private biens : Object[] = [];
  private role : string;
  private services : Object[] = [];
  private notifier;

  private les_tags : Object[]; //formulaire bien
  private les_tags_autre : Object[]; //formulaire service

  private les_tags_biens_name : string ="";
  private les_tags_services_name : string="";
  private selected_tag; //formulaire bien
  private selected_tag_autre; //formulaire service

  private la_date_choisi; //formulaire bien
  private la_date_choisi_autre; //formulaire service

  private date_biens : Object[] =[]; 
  private date_biens_string :string ="";

  private date_services : Object[] =[];
  private date_services_string :string ="";

  private emprunt : Object[] = [];
  constructor(private service: UsersService,private serviceNaviBien: SearchBiensService,private serviceNaviService: SearchServService ,private router: Router) { }

  addBien(){
  	if(this.nomBien!="" && this.descriptif!="" && this.date_biens.length!=0){
  		let leBien = {"idProprio":this.email,"nom":this.nomBien,"descriptif":this.descriptif,"prixNeuf":this.prix,"tags":this.tags_bien};
		this.service.addBien(leBien).subscribe(res =>{
			let iDBien = res;
			let data;
			let date;
			let pmAm;
			let dateCourante : string;
      let split;
			for(let i = 0 ; i<this.date_biens.length;i++){
				dateCourante=this.date_biens[i].toString();
        split = dateCourante.split(":");
				date = split[0];
				pmAm= split[1];
				data={"idBien":iDBien.toString(),"date":date,"AMPM":pmAm}; 
				this.service.addDispo(data).subscribe(res =>{});
			}
		  	this.update();
  			this.resetBien();
		});
  	}

  }

  addService(){
    if(this.titreService!="" && this.descService!="" && this.experience!="" && this.date_services.length!=0){
      let leService = {"idProprio":this.email,"titre":this.titreService,"descriptif":this.descService,"experience":this.experience,"prixService":this.prixService};
      this.service.addService(leService).subscribe(res =>{
        let idService = res;
        let data;
        let date;
        let pmAm;
        let dateCourante : string;
        for(let i = 0 ; i<this.date_biens.length;i++){
          dateCourante=this.date_biens[i].toString();
          date = dateCourante.slice(0, 10);
          pmAm=dateCourante.slice(11, 13);
          data={"idService":idService.toString(),"date":date,"AMPM":pmAm}; 
          this.service.addDispo(data).subscribe(res =>{});
        }
        this.update();
        this.resetService();
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

  tabBien(){
    if(this.afficherTabBien==false)
      this.afficherTabBien=true;
    else
      this.afficherTabBien=false;
  }

  tabService(){
    if(this.afficherTabService==false)
      this.afficherTabService=true;
    else
      this.afficherTabService=false;  
  }

  ngOnInit() {
	  	this.nomBien="";
		this.descriptif="";
		this.les_tags_biens_name="";
		this.les_tags_services_name="";
		let item = JSON.parse(sessionStorage.getItem('user'));
        this.nom = item[0].nom;
        this.prenom = item[0].prenom;
        this.email = item[0].email;
        this.role = item[0].role;
        this.notifier = item[0].aNotifier;
        this.service.getBiensByEmail(this.email).subscribe(res =>{
			this.biens = res;
	        this.service.getServicesByEmail(this.email).subscribe(res =>{
	           this.services = res;
	           this.service.getTag().subscribe(res => {
	           		this.les_tags=res;
	           		this.les_tags_autre=res;
                this.service.getEmprunt(this.email).subscribe(res => {
                  this.emprunt = res;
                });
	           });
	        });
  		});
  }

  resetBien(){
  	  this.date_biens_string = "";
	  this.nomBien="";
	  this.descriptif="";
	  this.prix=1;
	  this.amBien=true;
	  this.tags_bien=[];
	  this.les_tags_biens_name="";
	  this.selected_tag=[];

	  this.la_date_choisi = [];
	  this.la_date_choisi_autre=[];
	  this.date_biens=[];
	  this.date_services=[];

  }

   resetService(){
  		this.la_date_choisi_autre="";
   		this.date_services_string="";
   		this.titreService="";
		this.descService="";
		this.experience="";
		this.prixService=1;
		this.tags_service=[];
		this.amService=true;
		this.les_tags_services_name="";

		this.selected_tag_autre=[];

  }

  ajoutTagBien(){
  	if(this.selected_tag!=undefined){
	  	for(let i =0; i<this.selected_tag.length;i++){
	  		this.tags_bien.push(this.selected_tag[i].idTags);
	  	  this.les_tags_biens_name+=this.selected_tag[i].nom+"\n";
      }
  	}
  }

  removeTagsBien(){
    this.les_tags_biens_name="";
    this.tags_bien=[];
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

  removeDateBien(){
    this.date_biens_string="";
    this.date_biens=[];
  }

  ajoutTagService(){
    if(this.selected_tag_autre!=undefined){
	  	for(let i =0; i<this.selected_tag_autre.length;i++){
	  		this.tags_service.push(this.selected_tag_autre[i].idTags);
	  	  this.les_tags_services_name+=this.selected_tag_autre[i].nom+"\n";
      }
  	}

  }

  removeTagsService(){
    this.les_tags_services_name="";
    this.tags_service=[];
  }

  ajoutDateService(){
	  if(this.la_date_choisi_autre!=undefined){
	  		let amOrPm = "am";
	  		let jour = this.la_date_choisi_autre.day;
	  		let mois = this.la_date_choisi_autre.month;
	  		let annee = this.la_date_choisi_autre.year;
	  		if(this.amService==false)
	  			amOrPm="pm";

	  		let date = jour+"/"+mois+"/"+annee+":"+amOrPm;
	  		this.date_services.push(date);
		  	this.date_services_string+=date+"\n";
	  	}
  }

  removeDateService(){
    this.date_services_string="";
    this.date_services=[];
  }

  update(){
    this.service.getBiensByEmail(this.email).subscribe(res =>{
	   this.biens = res;
        this.service.getServicesByEmail(this.email).subscribe(res =>{
      			this.les_tags_biens_name="";
      			this.les_tags_services_name="";
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

  navigateToBien(res:any){
    this.serviceNaviBien.bien = res;
    this.router.navigate(['bien']);
  }

  navigateToService(res:any){
    this.serviceNaviService.serv = res;
    this.router.navigate(['service']);
  }

  navigateTo(type:string,id:string){
    if(type=="service"){
      this.service.getServicesById(id).subscribe(res => {
        this.serviceNaviService.serv = res[0];
        this.router.navigate(['service']);
      })
    }
    else{
      this.service.getBiensById(id).subscribe(res => {
        this.serviceNaviBien.bien = res[0];
        this.router.navigate(['bien']);
      })
    }
  }

}
