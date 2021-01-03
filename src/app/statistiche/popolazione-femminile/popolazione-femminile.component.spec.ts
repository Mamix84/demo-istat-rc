import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopolazioneFemminileComponent } from './popolazione-femminile.component';

describe('PopolazioneFemminileComponent', () => {
  let component: PopolazioneFemminileComponent;
  let fixture: ComponentFixture<PopolazioneFemminileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopolazioneFemminileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopolazioneFemminileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
