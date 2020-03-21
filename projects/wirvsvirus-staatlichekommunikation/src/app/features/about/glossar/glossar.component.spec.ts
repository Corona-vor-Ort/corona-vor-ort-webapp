import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossarComponent } from './glossar.component';

describe('GlossarComponent', () => {
  let component: GlossarComponent;
  let fixture: ComponentFixture<GlossarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlossarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlossarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
