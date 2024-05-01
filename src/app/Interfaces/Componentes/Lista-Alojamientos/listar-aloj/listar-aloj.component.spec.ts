import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAlojComponent } from './listar-aloj.component';

describe('ListarAlojComponent', () => {
  let component: ListarAlojComponent;
  let fixture: ComponentFixture<ListarAlojComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarAlojComponent]
    });
    fixture = TestBed.createComponent(ListarAlojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
