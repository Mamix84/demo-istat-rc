import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiornaStoricoComponent } from './aggiorna-storico.component';

describe('AggiornaStoricoComponent', () => {
  let component: AggiornaStoricoComponent;
  let fixture: ComponentFixture<AggiornaStoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggiornaStoricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiornaStoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
