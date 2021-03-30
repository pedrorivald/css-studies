import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderImageComponent } from './border-image.component';

describe('BorderImageComponent', () => {
  let component: BorderImageComponent;
  let fixture: ComponentFixture<BorderImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
