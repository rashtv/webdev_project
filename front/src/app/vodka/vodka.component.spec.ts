import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VodkaComponent } from './vodka.component';

describe('VodkaComponent', () => {
  let component: VodkaComponent;
  let fixture: ComponentFixture<VodkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VodkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VodkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
