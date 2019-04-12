import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveReptileModalPage } from './remove-reptile-modal.page';

describe('RemoveReptileModalPage', () => {
  let component: RemoveReptileModalPage;
  let fixture: ComponentFixture<RemoveReptileModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveReptileModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveReptileModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
