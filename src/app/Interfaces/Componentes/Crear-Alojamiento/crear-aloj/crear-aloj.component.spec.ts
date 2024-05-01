import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAlojComponent } from './crear-aloj.component';

describe('CrearAlojComponent', () => {
  let component: CrearAlojComponent;
  let fixture: ComponentFixture<CrearAlojComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearAlojComponent]
    });
    fixture = TestBed.createComponent(CrearAlojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
