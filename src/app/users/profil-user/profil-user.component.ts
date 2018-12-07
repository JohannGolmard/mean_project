import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.css']
})
export class ProfilUserComponent implements OnInit {

  private nom: string;
  private prenom: string;
  private biens : Object[];
  private services : Object[];

  constructor() { }

  ngOnInit() {
		let item = JSON.parse(localStorage.getItem('user'))
        this.nom = item[0].nom;
        this.prenom = item[0].prenom;
  }

}
