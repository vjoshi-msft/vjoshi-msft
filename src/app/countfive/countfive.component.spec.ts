import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountfiveComponent } from './countfive.component';

describe('CountfiveComponent', () => {
  let component: CountfiveComponent;
  let fixture: ComponentFixture<CountfiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountfiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
