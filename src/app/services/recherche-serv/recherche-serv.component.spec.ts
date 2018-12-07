import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheServComponent } from './recherche-serv.component';

describe('RechercheServComponent', () => {
  let component: RechercheServComponent;
  let fixture: ComponentFixture<RechercheServComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheServComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
