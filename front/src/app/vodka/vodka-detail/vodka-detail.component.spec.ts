import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VodkaDetailComponent } from './vodka-detail.component';

describe('VodkaDetailComponent', () => {
  let component: VodkaDetailComponent;
  let fixture: ComponentFixture<VodkaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VodkaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VodkaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
