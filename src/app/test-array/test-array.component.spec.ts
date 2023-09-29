import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestArrayComponent } from './test-array.component';

describe('TestArrayComponent', () => {
  let component: TestArrayComponent;
  let fixture: ComponentFixture<TestArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
