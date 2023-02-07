import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdalostListComponent } from './udalost-list.component';

describe('UdalostListComponent', () => {
  let component: UdalostListComponent;
  let fixture: ComponentFixture<UdalostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdalostListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdalostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
