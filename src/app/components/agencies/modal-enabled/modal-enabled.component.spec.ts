import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEnabledComponent } from './modal-enabled.component';

describe('ModalEnabledComponent', () => {
  let component: ModalEnabledComponent;
  let fixture: ComponentFixture<ModalEnabledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEnabledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEnabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
