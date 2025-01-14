import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmakeupComponent } from './addmakeup.component';

describe('AddmakeupComponent', () => {
  let component: AddmakeupComponent;
  let fixture: ComponentFixture<AddmakeupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddmakeupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddmakeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
