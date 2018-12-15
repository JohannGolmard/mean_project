import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageServComponent } from './page-serv.component';

describe('PageServComponent', () => {
  let component: PageServComponent;
  let fixture: ComponentFixture<PageServComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageServComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
