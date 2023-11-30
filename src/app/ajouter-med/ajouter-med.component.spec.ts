import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMedComponent } from './ajouter-med.component';

describe('AjouterMedComponent', () => {
  let component: AjouterMedComponent;
  let fixture: ComponentFixture<AjouterMedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterMedComponent]
    });
    fixture = TestBed.createComponent(AjouterMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
