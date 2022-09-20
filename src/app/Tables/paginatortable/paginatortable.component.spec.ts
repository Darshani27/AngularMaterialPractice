import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatortableComponent } from './paginatortable.component';

describe('PaginatortableComponent', () => {
  let component: PaginatortableComponent;
  let fixture: ComponentFixture<PaginatortableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatortableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatortableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
