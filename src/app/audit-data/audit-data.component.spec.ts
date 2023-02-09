import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditDataComponent } from './audit-data.component';

describe('AuditDataComponent', () => {
  let component: AuditDataComponent;
  let fixture: ComponentFixture<AuditDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
