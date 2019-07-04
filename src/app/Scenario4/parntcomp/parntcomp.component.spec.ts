import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParntcompComponent } from './parntcomp.component';

describe('ParntcompComponent', () => {
  let component: ParntcompComponent;
  let fixture: ComponentFixture<ParntcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParntcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParntcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
