import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExploreUi } from './explore-ui';

describe('ExploreUi', () => {
  let component: ExploreUi;
  let fixture: ComponentFixture<ExploreUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreUi],
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
