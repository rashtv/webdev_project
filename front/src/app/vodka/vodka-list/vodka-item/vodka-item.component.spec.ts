import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VodkaItemComponent } from './vodka-item.component';

describe('VodkaItemComponent', () => {
  let component: VodkaItemComponent;
  let fixture: ComponentFixture<VodkaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VodkaItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VodkaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
