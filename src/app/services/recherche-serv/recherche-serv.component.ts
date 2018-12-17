import { Component, OnInit } from '@angular/core';
import { SearchServService } from '../search-serv.service';
import { UsersService } from '../../users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recherche-serv',
  templateUrl: './recherche-serv.component.html',
  styleUrls: ['./recherche-serv.component.css']
})
export class RechercheServComponent implements OnInit {
  private titre: string;
  private min: number=1;
  private max: number=1000000;
  private jourD : any = {"day":"01","month":"01","year":"2018"};
  private jourF : any = {"day":"31","month":"12","year":"2118"};
  private tags : string = "";
  private result : Object [];
  private submitted : boolean = false;
  private canBorrow : boolean = true;

  private les_tags;
  private selected_tag;

  constructor(private service: SearchServService, private service_tag : UsersService, private router: Router) { }

  ngOnInit() {
    this.les_tags=[];
    this.les_tags.push(" ");
    this.service_tag.getTag().subscribe(res => {
      this.les_tags=res;
      if(JSON.parse(localStorage.getItem('user'))[0].aNotifier){
        this.canBorrow = false;
      }
    });
  }

  ajoutTag(){
    if(this.selected_tag!=undefined){
      for(let i =0; i<this.selected_tag.length;i++){
          this.tags+=this.selected_tag[i].nom+";";
      }
    }
  }
  removeTags(){
    this.tags="";
  }

  navigateTo(res:any){
    this.service.serv = res;
    this.router.navigate(['service']);
  }

  onSearch(){
  	if(this.titre != undefined && this.min != undefined && this.max != undefined && this.jourD != undefined && this.jourF != undefined){
      let jour = this.jourD.day;
      let mois = this.jourD.month;
      let annee = this.jourD.year;
      let dd = jour+"/"+mois+"/"+annee;

      jour = this.jourF.day;
      mois = this.jourF.month;
      annee = this.jourF.year;
      let df = jour+"/"+mois+"/"+annee;
      let tag =this.tags.substring(0, this.tags.length-1); // remove le dernier ;

  		this.service.getService(this.titre,this.min,this.max,dd,df,tag).subscribe(res =>{
  			this.result = res;
        console.log(res);
            this.submitted=true;
  		});

  	}
  }

}
