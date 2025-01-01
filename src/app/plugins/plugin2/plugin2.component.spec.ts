import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plugin2Component } from './plugin2.component';

describe('Plugin2Component', () => {
  let component: Plugin2Component;
  let fixture: ComponentFixture<Plugin2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Plugin2Component]
    });
    fixture = TestBed.createComponent(Plugin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
