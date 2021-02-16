import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevisioneComuneSingoloComponent } from './previsione-comune-singolo.component';

describe('PrevisioneComuneSingoloComponent', () => {
  let component: PrevisioneComuneSingoloComponent;
  let fixture: ComponentFixture<PrevisioneComuneSingoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevisioneComuneSingoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevisioneComuneSingoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
