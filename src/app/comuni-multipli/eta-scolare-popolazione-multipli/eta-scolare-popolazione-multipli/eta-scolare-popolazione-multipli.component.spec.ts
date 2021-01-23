import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtaScolarePopolazioneMultipliComponent } from './eta-scolare-popolazione-multipli.component';

describe('EtaScolarePopolazioneMultipliComponent', () => {
  let component: EtaScolarePopolazioneMultipliComponent;
  let fixture: ComponentFixture<EtaScolarePopolazioneMultipliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtaScolarePopolazioneMultipliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtaScolarePopolazioneMultipliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
