import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistichePopolazioneMultipliComponent } from './statistiche-popolazione-multipli.component';

describe('StatistichePopolazioneMultipliComponent', () => {
  let component: StatistichePopolazioneMultipliComponent;
  let fixture: ComponentFixture<StatistichePopolazioneMultipliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistichePopolazioneMultipliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistichePopolazioneMultipliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
