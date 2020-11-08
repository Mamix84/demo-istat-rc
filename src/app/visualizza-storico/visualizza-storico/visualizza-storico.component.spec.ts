import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaStoricoComponent } from './visualizza-storico.component';

describe('VisualizzaStoricoComponent', () => {
  let component: VisualizzaStoricoComponent;
  let fixture: ComponentFixture<VisualizzaStoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizzaStoricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizzaStoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
