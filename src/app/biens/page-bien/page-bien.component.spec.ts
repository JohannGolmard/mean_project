import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBienComponent } from './page-bien.component';

describe('PageBienComponent', () => {
  let component: PageBienComponent;
  let fixture: ComponentFixture<PageBienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
