import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfrontaComuniComponent } from './confronta-comuni.component';

describe('ConfrontaComuniComponent', () => {
  let component: ConfrontaComuniComponent;
  let fixture: ComponentFixture<ConfrontaComuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfrontaComuniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfrontaComuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
