import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResearchUi } from './research-ui';

describe('ResearchUi', () => {
  let component: ResearchUi;
  let fixture: ComponentFixture<ResearchUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchUi],
    }).compileComponents();

    fixture = TestBed.createComponent(ResearchUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
