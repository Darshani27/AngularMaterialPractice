import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetOpenComponentComponent } from './bottom-sheet-open-component.component';

describe('BottomSheetOpenComponentComponent', () => {
  let component: BottomSheetOpenComponentComponent;
  let fixture: ComponentFixture<BottomSheetOpenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomSheetOpenComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomSheetOpenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
