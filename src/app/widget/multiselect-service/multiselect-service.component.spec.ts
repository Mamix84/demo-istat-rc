import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectServiceComponent } from './multiselect-service.component';

describe('MultiselectServiceComponent', () => {
  let component: MultiselectServiceComponent;
  let fixture: ComponentFixture<MultiselectServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiselectServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
