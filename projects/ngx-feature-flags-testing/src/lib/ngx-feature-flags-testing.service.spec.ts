import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { NgxFeatureFlagsTestingService } from './ngx-feature-flags-testing.service';

describe('NgxFeatureFlagsTestingService', () => {
  let spectator: SpectatorService<NgxFeatureFlagsTestingService>;
  const createService = createServiceFactory(NgxFeatureFlagsTestingService);

  beforeEach(() => (spectator = createService()));

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
