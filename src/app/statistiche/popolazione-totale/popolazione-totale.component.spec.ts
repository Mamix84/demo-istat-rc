import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopolazioneTotaleComponent } from './popolazione-totale.component';

describe('PopolazioneTotaleComponent', () => {
  let component: PopolazioneTotaleComponent;
  let fixture: ComponentFixture<PopolazioneTotaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopolazioneTotaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopolazioneTotaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
