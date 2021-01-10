import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoLineeComponent } from './grafico-linee.component';

describe('GraficoLineeComponent', () => {
  let component: GraficoLineeComponent;
  let fixture: ComponentFixture<GraficoLineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoLineeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoLineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
