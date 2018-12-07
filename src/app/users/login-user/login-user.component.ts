import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

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
  constructor(private service: UsersService) { }

  ngOnInit() {
  }
  onSubmit(){

  	if(this.login != "" && this.passwd != null){
      this.service.loginIn(this.login,this.passwd).subscribe(res =>{
        this.resultat = res;
        if(this.resultat.length==1){
        localStorage.setItem('user',JSON.stringify(this.resultat));
          this.isLogged = true;
        }
      });
  	}

  }
  logOut(){
  	this.isLogged = false;
    localStorage.removeItem('user');
  }

}
