import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcnoComponent } from './tcno.component';

describe('TcnoComponent', () => {
  let component: TcnoComponent;
  let fixture: ComponentFixture<TcnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TcnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
