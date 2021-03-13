import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndamentoDemograficoComuneSingoloComponent } from './andamento-demografico-comune-singolo.component';

describe('AndamentoDemograficoComuneSingoloComponent', () => {
  let component: AndamentoDemograficoComuneSingoloComponent;
  let fixture: ComponentFixture<AndamentoDemograficoComuneSingoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndamentoDemograficoComuneSingoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndamentoDemograficoComuneSingoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
