import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeupproductsComponent } from './makeupproducts.component';

describe('MakeupproductsComponent', () => {
  let component: MakeupproductsComponent;
  let fixture: ComponentFixture<MakeupproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeupproductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MakeupproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
