import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionHostCompComponent } from './action-host-comp.component';

describe('ActionHostCompComponent', () => {
  let component: ActionHostCompComponent;
  let fixture: ComponentFixture<ActionHostCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionHostCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionHostCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
