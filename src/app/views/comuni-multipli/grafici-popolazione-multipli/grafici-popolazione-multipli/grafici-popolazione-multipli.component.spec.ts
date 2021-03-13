import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficiPopolazioneMultipliComponent } from './grafici-popolazione-multipli.component';

describe('GraficiPopolazioneMultipliComponent', () => {
  let component: GraficiPopolazioneMultipliComponent;
  let fixture: ComponentFixture<GraficiPopolazioneMultipliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficiPopolazioneMultipliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficiPopolazioneMultipliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
