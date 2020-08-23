import { TestBed } from '@angular/core/testing';

import { NgxFeatureFlagsConfigurationService } from './ngx-feature-flags-configuration.service';
import { NgxFeatureFlagsTestingModule } from './ngx-feature-flags-testing.module';
import { NgxFeatureFlagsService } from 'ngx-feature-flags';

describe('NgxFeatureFlagsConfigurationService', () => {
  let service: NgxFeatureFlagsService;
  let configure: NgxFeatureFlagsConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [NgxFeatureFlagsTestingModule] });
    configure = TestBed.get(NgxFeatureFlagsConfigurationService);
    service = TestBed.get(NgxFeatureFlagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should enable feature with toggle', () => {
    configure.toggleFeatureFlag('feature');
    expect(service.featureOn('feature')).toBeTrue();
  });
  it('should enable feature', () => {
    configure.setFeatureFlag('feature', true);
    expect(service.featureOn('feature')).toBeTrue();
  });

  it('should disable feature', () => {
    configure.setFeatureFlag('feature', true);
    expect(service.featureOn('feature')).toBeTrue();
    configure.setFeatureFlag('feature', false);
    expect(service.featureOn('feature')).toBeFalse();
  });

  it.each([true, false])('should toggle the feature from %s', (a) => {
    configure.setFeatureFlag('feature', a);
    configure.toggleFeatureFlag('feature');
    expect(service.featureOn('feature')).toBe(!a);
  });

  it('should emit refresh$ when the feature is set to true', (done) => {
    service.refresh$.subscribe((c) => {
      expect(c).toBeTrue();
      done();
    });
    configure.setFeatureFlag('feature', true);
  });
  it('should emit refresh$ when the feature is set to false', (done) => {
    service.refresh$.subscribe((c) => {
      expect(c).toBeTrue();
      done();
    });
    configure.setFeatureFlag('feature', false);
  });
  it('should emit refresh$ when the feature is toggled', (done) => {
    service.refresh$.subscribe((c) => {
      expect(c).toBeTrue();
      done();
    });
    configure.toggleFeatureFlag('feature');
  });
});
