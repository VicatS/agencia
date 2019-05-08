import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAgenciesComponent } from './report-agencies.component';

describe('ReportAgenciesComponent', () => {
  let component: ReportAgenciesComponent;
  let fixture: ComponentFixture<ReportAgenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAgenciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAgenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
