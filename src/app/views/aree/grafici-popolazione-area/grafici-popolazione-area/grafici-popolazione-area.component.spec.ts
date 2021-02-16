import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficiPopolazioneAreaComponent } from './grafici-popolazione-area.component';

describe('GraficiPopolazioneAreaComponent', () => {
  let component: GraficiPopolazioneAreaComponent;
  let fixture: ComponentFixture<GraficiPopolazioneAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficiPopolazioneAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficiPopolazioneAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
