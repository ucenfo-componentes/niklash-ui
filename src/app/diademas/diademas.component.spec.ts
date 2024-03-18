import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiademasComponent } from './diademas.component';

describe('DiademasComponent', () => {
  let component: DiademasComponent;
  let fixture: ComponentFixture<DiademasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiademasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiademasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
