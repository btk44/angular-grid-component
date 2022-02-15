import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSetupComponent } from './grid-setup.component';

describe('GridSetupComponent', () => {
  let component: GridSetupComponent;
  let fixture: ComponentFixture<GridSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
