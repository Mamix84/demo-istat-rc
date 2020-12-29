import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TassoNatalitaComponent } from './tasso-natalita.component';

describe('TassoNatalitaComponent', () => {
  let component: TassoNatalitaComponent;
  let fixture: ComponentFixture<TassoNatalitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TassoNatalitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TassoNatalitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
