import { Injectable } from '@angular/core';
import { NgxFeatureFlagsService } from 'ngx-feature-flags';

@Injectable({
  providedIn: 'root',
})
export class NgxFeatureFlagsConfigurationService {
  constructor(private readonly _featureFlags: NgxFeatureFlagsService) {}

  setFeatureFlag(featureName: string, enabled: boolean) {
    this._featureFlags['featureFlags'].set(featureName, enabled);
    this._featureFlags['refresh'].next(true);
  }

  toggleFeatureFlag(featureName: string) {
    this.setFeatureFlag(featureName, !this._featureFlags['featureFlags'].get(featureName));
  }
}
