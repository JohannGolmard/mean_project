import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ProfilUserComponent } from './profil-user/profil-user.component';

@NgModule({
  declarations: [ListUsersComponent, CreateUserComponent, LoginUserComponent, ProfilUserComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
