import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceFertilitaComponent } from './indice-fertilita.component';

describe('IndiceFertilitaComponent', () => {
  let component: IndiceFertilitaComponent;
  let fixture: ComponentFixture<IndiceFertilitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiceFertilitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiceFertilitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
