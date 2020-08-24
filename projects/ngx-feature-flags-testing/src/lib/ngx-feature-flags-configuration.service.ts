import { Injectable } from '@angular/core';
import { NgxFeatureFlagsService } from 'ngx-feature-flags';
/**
 * A simple helper service to change the state of a feature flag
 *
 * @export
 * @class NgxFeatureFlagsConfigurationService
 */
@Injectable({
  providedIn: 'root',
})
export class NgxFeatureFlagsConfigurationService {
  constructor(private readonly _featureFlags: NgxFeatureFlagsService) {}

  /**
   * Change the state of a specific feature flag to a specific value
   *
   * @param {string} featureName specific name to identify the feature flag
   * @param {boolean} enabled state of the feature flag
   * @memberof NgxFeatureFlagsConfigurationService
   */
  setFeatureFlag(featureName: string, enabled: boolean) {
    this._featureFlags['featureFlags'].set(featureName, enabled);
    this._featureFlags['refresh'].next(true);
  }
  /**
   * Toggles the state of a feature flag
   *
   * @param {string} featureName specific name to identify the feature flag
   * @memberof NgxFeatureFlagsConfigurationService
   */
  toggleFeatureFlag(featureName: string) {
    this.setFeatureFlag(featureName, !this._featureFlags['featureFlags'].get(featureName));
  }
}
