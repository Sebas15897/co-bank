import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmUserGridComponent } from './adm-user-grid.component';

describe('AdmUserGridComponent', () => {
  let component: AdmUserGridComponent;
  let fixture: ComponentFixture<AdmUserGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmUserGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmUserGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
