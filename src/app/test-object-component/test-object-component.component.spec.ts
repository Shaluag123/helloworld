import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestObjectComponentComponent } from './TestObjectComponentComponent';

describe('TestObjectComponentComponent', () => {
  let component: TestObjectComponentComponent;
  let fixture: ComponentFixture<TestObjectComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestObjectComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestObjectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
