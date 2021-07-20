import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WelcomePage } from './welcome.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('WelcomePageComponent', () => {
  let component: WelcomePage;
  let fixture: ComponentFixture<WelcomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [WelcomePage],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
