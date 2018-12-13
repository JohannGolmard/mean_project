import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.css']
})
export class ProfilUserComponent implements OnInit {

  private nom: string;
  private prenom: string;
  private email: string;
  private biens : Object[] = [];
  private role : string;
  private services : Object[] = [];

  constructor(private service: UsersService,private router: Router) { }

  ngOnInit() {
		let item = JSON.parse(localStorage.getItem('user'));
        this.nom = item[0].nom;
        this.prenom = item[0].prenom;
        this.email = item[0].email;
        this.role = item[0].role;
        this.service.getBiensByEmail(this.email).subscribe(res =>{
			    this.biens = res;
          this.service.getServicesByEmail(this.email).subscribe(res =>{
            this.services = res;
          });
  		  });
  }

  supprimerBien(id:string){
    this.service.deleteBien(id).subscribe(res =>{
    });
  }

  supprimerService(id:string){
    this.service.deleteService(id).subscribe(res =>{});
  }

}
