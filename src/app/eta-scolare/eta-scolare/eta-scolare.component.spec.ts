import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtaScolareComponent } from './eta-scolare.component';

describe('EtaScolareComponent', () => {
  let component: EtaScolareComponent;
  let fixture: ComponentFixture<EtaScolareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtaScolareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtaScolareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
