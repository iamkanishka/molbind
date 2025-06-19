import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileUi } from './profile-ui';

describe('ProfileUi', () => {
  let component: ProfileUi;
  let fixture: ComponentFixture<ProfileUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileUi],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
