import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCrudComponent } from './first-crud.component';

describe('FirstCrudComponent', () => {
  let component: FirstCrudComponent;
  let fixture: ComponentFixture<FirstCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
