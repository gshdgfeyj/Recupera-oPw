import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovDetailComponent } from './imov-detail.component';

describe('ImovDetailComponent', () => {
  let component: ImovDetailComponent;
  let fixture: ComponentFixture<ImovDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImovDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
