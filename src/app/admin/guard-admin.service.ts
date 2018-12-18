import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class GuardAdminService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(): boolean{
  	let item = JSON.parse(sessionStorage.getItem('user'));
  	if(item == null) {
      this.router.navigate(['']);
      return false;
    }
    if(item[0].role != "admin"){
      return false;
    }
    return true;
  }
}
