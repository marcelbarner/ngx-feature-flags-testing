import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ComponentTestComponent } from './component-test.component';
import { NgxFeatureFlagsTestingModule } from '../../ngx-feature-flags-testing.module';

describe('ComponentTestComponent', () => {
  let component: ComponentTestComponent;
  let fixture: ComponentFixture<ComponentTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentTestComponent],
      imports: [NgxFeatureFlagsTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show the block #featureAOn', () => {
    const element = fixture.debugElement.query(By.css('#featureAOn'));
    expect(element).toBeNull();
  });
  it('should show the block #featureAOff', () => {
    const element = fixture.debugElement.query(By.css('#featureAOff'));
    expect(element).not.toBeNull();
  });
});
