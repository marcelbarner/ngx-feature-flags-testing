import { NgModule } from '@angular/core';
import { NgxFeatureFlagsModule, NgxFeatureFlagsService } from 'ngx-feature-flags';

@NgModule({
  imports: [NgxFeatureFlagsModule],
  providers: [
    {
      provide: NgxFeatureFlagsService,
      // tslint:disable-next-line: typedef
      useValue: new NgxFeatureFlagsService(() => Promise.resolve(new Map<string, boolean>())),
    },
  ],
  exports: [NgxFeatureFlagsModule],
})
export class NgxFeatureFlagsTestingModule {}
