import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ApplicationCounterComponent } from './application-counter.component';

describe('ApplicationCounterComponent', () => {
  let component: ApplicationCounterComponent;
  let fixture: ComponentFixture<ApplicationCounterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
