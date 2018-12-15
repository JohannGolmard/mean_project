import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RechercheComponent } from './recherche/recherche.component';
import { PageBienComponent } from './page-bien/page-bien.component';

@NgModule({
  declarations: [RechercheComponent, PageBienComponent],
  imports: [
    CommonModule
  ]
})
export class BiensModule { }
