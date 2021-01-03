import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopolazioneMaschileComponent } from './popolazione-maschile.component';

describe('PopolazioneMaschileComponent', () => {
  let component: PopolazioneMaschileComponent;
  let fixture: ComponentFixture<PopolazioneMaschileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopolazioneMaschileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopolazioneMaschileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
