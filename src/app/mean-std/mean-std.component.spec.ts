import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeanStdComponent } from './mean-std.component';

describe('MeanStdComponent', () => {
  let component: MeanStdComponent;
  let fixture: ComponentFixture<MeanStdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeanStdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeanStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
