import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MonitoringPage } from './monitoring-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('MonitoringPage', () => {

  let component: MonitoringPage;
  let fixture: ComponentFixture<MonitoringPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        MonitoringPage
      ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
