import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeInformationComponent } from './liste-information.component';

describe('ListeInformationComponent', () => {
  let component: ListeInformationComponent;
  let fixture: ComponentFixture<ListeInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeInformationComponent]
    });
    fixture = TestBed.createComponent(ListeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
