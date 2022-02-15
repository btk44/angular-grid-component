import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridGeneratedComponent } from './grid-generated.component';

describe('GridGeneratedComponent', () => {
  let component: GridGeneratedComponent;
  let fixture: ComponentFixture<GridGeneratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridGeneratedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridGeneratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
