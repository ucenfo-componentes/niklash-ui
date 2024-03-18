import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazosComponent } from './lazos.component';

describe('LazosComponent', () => {
  let component: LazosComponent;
  let fixture: ComponentFixture<LazosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LazosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
