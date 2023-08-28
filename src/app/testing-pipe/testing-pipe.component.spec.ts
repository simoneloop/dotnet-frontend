import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingPipeComponent } from './testing-pipe.component';

describe('TestingPipeComponent', () => {
  let component: TestingPipeComponent;
  let fixture: ComponentFixture<TestingPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
