import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { NgxFeatureFlagsTestingComponent } from './ngx-feature-flags-testing.component';

describe('NgxFeatureFlagsTestingComponent', () => {
  let spectator: Spectator<NgxFeatureFlagsTestingComponent>;
  const createComponent = createComponentFactory(NgxFeatureFlagsTestingComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
