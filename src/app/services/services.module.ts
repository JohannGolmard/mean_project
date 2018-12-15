import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RechercheServComponent } from './recherche-serv/recherche-serv.component';
import { PageServComponent } from './page-serv/page-serv.component';

@NgModule({
  declarations: [RechercheServComponent, PageServComponent],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { }
