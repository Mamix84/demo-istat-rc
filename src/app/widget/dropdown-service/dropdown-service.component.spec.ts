import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownServiceComponent } from './dropdown-service.component';

describe('DropdownServiceComponent', () => {
  let component: DropdownServiceComponent;
  let fixture: ComponentFixture<DropdownServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
