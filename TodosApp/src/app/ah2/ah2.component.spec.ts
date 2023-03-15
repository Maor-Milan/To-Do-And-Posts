import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AH2Component } from './ah2.component';

describe('AH2Component', () => {
  let component: AH2Component;
  let fixture: ComponentFixture<AH2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AH2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AH2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
