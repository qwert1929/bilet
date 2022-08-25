import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiyatComponent } from './fiyat.component';

describe('FiyatComponent', () => {
  let component: FiyatComponent;
  let fixture: ComponentFixture<FiyatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiyatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiyatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
