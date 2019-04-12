import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReptileModalPage } from './add-reptile-modal.page';

describe('AddReptileModalPage', () => {
  let component: AddReptileModalPage;
  let fixture: ComponentFixture<AddReptileModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReptileModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReptileModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
