import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierAdministratifComponent } from './dossier-administratif.component';

describe('DossierAdministratifComponent', () => {
  let component: DossierAdministratifComponent;
  let fixture: ComponentFixture<DossierAdministratifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DossierAdministratifComponent]
    });
    fixture = TestBed.createComponent(DossierAdministratifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
