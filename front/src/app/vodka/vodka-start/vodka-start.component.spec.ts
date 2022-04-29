import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VodkaStartComponent } from './vodka-start.component';

describe('VodkaStartComponent', () => {
  let component: VodkaStartComponent;
  let fixture: ComponentFixture<VodkaStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VodkaStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VodkaStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
