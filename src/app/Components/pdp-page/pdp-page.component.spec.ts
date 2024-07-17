import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpPageComponent } from './pdp-page.component';

describe('PdpPageComponent', () => {
  let component: PdpPageComponent;
  let fixture: ComponentFixture<PdpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdpPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PdpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
