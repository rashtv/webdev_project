import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VodkaListComponent } from './vodka-list.component';

describe('VodkaListComponent', () => {
  let component: VodkaListComponent;
  let fixture: ComponentFixture<VodkaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VodkaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VodkaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
