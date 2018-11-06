import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEducadosComponent } from './about-educados.component';

describe('AboutEducadosComponent', () => {
  let component: AboutEducadosComponent;
  let fixture: ComponentFixture<AboutEducadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutEducadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutEducadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
