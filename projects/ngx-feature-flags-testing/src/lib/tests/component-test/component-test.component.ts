import { Component, OnInit } from '@angular/core';
import { NgxFeatureFlagsService } from 'ngx-feature-flags';

@Component({
  selector: 'lib-component-test',
  template: `
    <p id="featureAOn" *ngxShowIfFeature="'featureA'">
      component-test works!
    </p>
    <p id="featureAOff" *ngxShowIfNotFeature="'featureA'">
      component-test works!
    </p>
  `,
  styles: [],
})
export class ComponentTestComponent implements OnInit {
  constructor(featureService: NgxFeatureFlagsService) {}

  ngOnInit(): void {}
}
