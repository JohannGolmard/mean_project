import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  public login : string;
  private passwd : string;
  public isLogged : boolean = false;
  private resultat : Object[];
  constructor(private service: UsersService,private router: Router) { }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem('user')).length != 0)
      this.router.navigate(['/profil']);
  }
  onSubmit(){

  	if(this.login != null && this.passwd != null){
      this.service.loginIn(this.login,this.passwd).subscribe(res =>{
        this.resultat = res;
        if(this.resultat.length==1){
        localStorage.setItem('user',JSON.stringify(this.resultat));
          this.isLogged = true;
          this.router.navigate(['/profil']);
        }
      });
  	}

  }
  logOut(){
  	this.isLogged = false;
    localStorage.removeItem('user');
  }

}
