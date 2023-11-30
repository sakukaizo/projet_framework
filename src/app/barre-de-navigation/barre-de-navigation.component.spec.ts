import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreDeNavigationComponent } from './barre-de-navigation.component';

describe('BarreDeNavigationComponent', () => {
  let component: BarreDeNavigationComponent;
  let fixture: ComponentFixture<BarreDeNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarreDeNavigationComponent]
    });
    fixture = TestBed.createComponent(BarreDeNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
