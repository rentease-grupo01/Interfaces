import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parte4Component } from './parte4.component';

describe('Parte4Component', () => {
  let component: Parte4Component;
  let fixture: ComponentFixture<Parte4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Parte4Component]
    });
    fixture = TestBed.createComponent(Parte4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
