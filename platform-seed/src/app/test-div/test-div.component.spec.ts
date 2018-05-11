import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDivComponent } from './test-div.component';

describe('TestDivComponent', () => {
  let component: TestDivComponent;
  let fixture: ComponentFixture<TestDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
