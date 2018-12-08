import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';

import { ListUsersComponent } from './users/list-users/list-users.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { LoginUserComponent } from './users/login-user/login-user.component';
import { RechercheComponent } from './biens/recherche/recherche.component';
import { RechercheServComponent } from './services/recherche-serv/recherche-serv.component';
import { ProfilUserComponent } from './users/profil-user/profil-user.component';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
   path:'', 
   component: HomepageComponent
  },
  {
   path:'subscription', 
   component: CreateUserComponent
  },
  {
   path:'profil',
   component: ProfilUserComponent
  },
  {
   path:'login',
   component: LoginUserComponent
  },
  {
   path:'resBien',
   component: RechercheComponent
  },
  {
   path:'resServ',
   component: RechercheServComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    CreateUserComponent,
    LoginUserComponent,
    MenuComponent,
    RechercheComponent,
    RechercheServComponent,
    ProfilUserComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
