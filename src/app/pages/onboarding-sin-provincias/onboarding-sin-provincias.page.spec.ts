import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnboardingSinProvinciasPage } from './onboarding-sin-provincias.page';

describe('OnboardingSinProvinciasPage', () => {
  let component: OnboardingSinProvinciasPage;
  let fixture: ComponentFixture<OnboardingSinProvinciasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OnboardingSinProvinciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
