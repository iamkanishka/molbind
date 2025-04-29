import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculeBankComponent } from './molecule-bank.component';

describe('MoleculeBankComponent', () => {
  let component: MoleculeBankComponent;
  let fixture: ComponentFixture<MoleculeBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoleculeBankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoleculeBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
