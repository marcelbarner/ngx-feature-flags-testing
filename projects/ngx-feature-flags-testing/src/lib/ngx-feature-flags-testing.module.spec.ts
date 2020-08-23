import { TestBed } from '@angular/core/testing';
import { NgxFeatureFlagsService, NgxFeatureFlagsModule } from 'ngx-feature-flags';
import { NgxFeatureFlagsTestingModule } from './ngx-feature-flags-testing.module';

describe('NgxFeatureFlagsTestingModule', () => {
  describe.each([
    ['per default', NgxFeatureFlagsTestingModule],
    ['with single flag', NgxFeatureFlagsTestingModule.withFeatureFlag('feature')],
    [
      'with multiple flags',
      NgxFeatureFlagsTestingModule.withFeatureFlags(
        new Map([
          ['featureA', true],
          ['featureB', false],
        ])
      ),
    ],
  ])('importing the module %s', (a, b) => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [b],
      });
    });
    it('should provide the NgxFeatureFlagsService', () => {
      const service = TestBed.get(NgxFeatureFlagsService);
      expect(service).toBeTruthy();
    });
    it.each(['feature', 'featureB', 'featureC'])('the feature %s should be disabled', (a) => {
      const service: NgxFeatureFlagsService = TestBed.get(NgxFeatureFlagsService);
      expect(service.featureOn(a)).toBeFalse();
      expect(service.featureOff(a)).toBeTrue();
    });
    it('should provide the NgxFeatureFlagsModule', () => {
      const service = TestBed.get(NgxFeatureFlagsModule);
      expect(service).toBeTruthy();
    });
  });

  describe('importing the module with single flag enabled', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [NgxFeatureFlagsTestingModule.withFeatureFlag('featureA', true)],
      });
    });
    it('should provide the NgxFeatureFlagsService', () => {
      const service = TestBed.get(NgxFeatureFlagsService);
      expect(service).toBeTruthy();
    });
    it.each(['feature', 'featureB', 'featureC'])('the feature %s should be disabled', (a) => {
      const service: NgxFeatureFlagsService = TestBed.get(NgxFeatureFlagsService);
      expect(service.featureOn(a)).toBeFalse();
    });
    it('the feature "featureA" should be enabled', () => {
      const service: NgxFeatureFlagsService = TestBed.get(NgxFeatureFlagsService);
      expect(service.featureOn('featureA')).toBeTrue();
    });
    it('should provide the NgxFeatureFlagsModule', () => {
      const service = TestBed.get(NgxFeatureFlagsModule);
      expect(service).toBeTruthy();
    });
  });

  describe('importing the module with multiple flags enabled and disabled', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          NgxFeatureFlagsTestingModule.withFeatureFlags(
            new Map([
              ['featureA', true],
              ['featureB', false],
            ])
          ),
        ],
      });
    });
    it('should provide the NgxFeatureFlagsService', () => {
      const service = TestBed.get(NgxFeatureFlagsService);
      expect(service).toBeTruthy();
    });
    it.each(['feature', 'featureB', 'featureC'])('the feature %s should be disabled', (a) => {
      const service: NgxFeatureFlagsService = TestBed.get(NgxFeatureFlagsService);
      expect(service.featureOn(a)).toBeFalse();
    });
    it('the feature "featureA" should be enabled', () => {
      const service: NgxFeatureFlagsService = TestBed.get(NgxFeatureFlagsService);
      expect(service.featureOn('featureA')).toBeTrue();
    });
    it('should provide the NgxFeatureFlagsModule', () => {
      const service = TestBed.get(NgxFeatureFlagsModule);
      expect(service).toBeTruthy();
    });
  });
});
