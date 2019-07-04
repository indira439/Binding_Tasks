import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcompontComponent } from './childcompont.component';

describe('ChildcompontComponent', () => {
  let component: ChildcompontComponent;
  let fixture: ComponentFixture<ChildcompontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildcompontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildcompontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
