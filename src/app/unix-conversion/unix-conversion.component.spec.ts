import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnixConversionComponent } from './unix-conversion.component';

describe('UnixConversionComponent', () => {
  let component: UnixConversionComponent;
  let fixture: ComponentFixture<UnixConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnixConversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnixConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
