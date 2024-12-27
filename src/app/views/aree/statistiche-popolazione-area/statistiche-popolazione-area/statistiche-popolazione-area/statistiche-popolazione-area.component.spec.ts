import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistichePopolazioneAreaComponent } from './statistiche-popolazione-area.component';

describe('StatistichePopolazioneAreaComponent', () => {
  let component: StatistichePopolazioneAreaComponent;
  let fixture: ComponentFixture<StatistichePopolazioneAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistichePopolazioneAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistichePopolazioneAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
