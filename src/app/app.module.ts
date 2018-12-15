import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule, LOCALE_ID } from '@angular/core';
import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { LoginUserComponent } from './users/login-user/login-user.component';
import { RechercheComponent } from './biens/recherche/recherche.component';
import { RechercheServComponent } from './services/recherche-serv/recherche-serv.component';
import { ProfilUserComponent } from './users/profil-user/profil-user.component';
import { PageBienComponent } from './biens/page-bien/page-bien.component';
import { PageServComponent } from './services/page-serv/page-serv.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { GuardUsersService } from './users/guard-users.service';
import { GuardAdminService } from './admin/guard-admin.service';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');

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
   component: ProfilUserComponent,
   canActivate: [GuardUsersService]
  },
  {
   path:'login',
   component: LoginUserComponent
  },
  {
   path:'resBien',
   component: RechercheComponent,
   canActivate: [GuardUsersService]
  },
  {
   path:'bien',
   component: PageBienComponent,
   canActivate: [GuardUsersService]
  },
  {
   path:'service',
   component: PageServComponent,
   canActivate: [GuardUsersService]
  },
  {
   path:'resServ',
   component: RechercheServComponent,
   canActivate: [GuardUsersService]
  },
  {
   path:'admin',
   component: AdminPageComponent,
   canActivate: [GuardAdminService]
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
    PageBienComponent,
    PageServComponent,
    RechercheServComponent,
    ProfilUserComponent,
    HomepageComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [GuardUsersService,GuardAdminService,{ provide: LOCALE_ID, useValue: 'fr' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
