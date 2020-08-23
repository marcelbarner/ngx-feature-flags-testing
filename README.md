<p align="center">
 <img width="20%" height="20%" src="./logo.svg">
</p>

<br />

[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)]()
[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)]()
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
[![ngneat](https://img.shields.io/badge/@-ngneat-383636?style=flat-square&labelColor=8f68d4)](https://github.com/ngneat/)
[![spectator](https://img.shields.io/badge/tested%20with-spectator-2196F3.svg?style=flat-square)]()

> Testing should be easy

ngx-feature-flags-testing is a package to simplify writting tests when you use [ngx-feature-flags](https://www.npmjs.com/package/ngx-feature-flags). It offers you the ability to define directly feature flags in the import section of your `TestBed`.

## Features

- ✅ Import all parts of [ngx-feature-flags](https://www.npmjs.com/package/ngx-feature-flags) without additional configuration.
- ✅ Configure single feature flag during import
- ✅ Configure multiple feature flags during import
- ✅ Edit state during runtime with set or toggle

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [FAQ](#faq)

## Installation

### NPM

`npm install ngx-feature-flags-testing --save-dev`

### Yarn

`yarn add ngx-feature-flags-testing --dev`

## Usage

The `NgxFeatureFlagsTestingModule` class can provide all of the capabilities of the `ngx-feature-flags` `NgxFeatureFlagsModule` (directives, pipes,and services) and easily be configured with feature flags for your test cases.

The module can easily be imported into your test cases:

```ts
import { NgxFeatureFlagsTestingModule } from 'ngx-feature-flags-testing';
```

### Using without feature flags

```ts
TestBed.configureTestingModule({
  imports: [NgxFeatureFlagsTestingModule],
});
```

### Using with one feature flag

```ts
/// With feature disabled
TestBed.configureTestingModule({
  imports: [NgxFeatureFlagsTestingModule.withFeatureFlag('featureA')],
});
// With feature enabled
TestBed.configureTestingModule({
  imports: [NgxFeatureFlagsTestingModule.withFeatureFlag('featureA', true)],
});
```

### Using with multiple feature flags

```ts
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
```

### Using with [Spectator](https://www.npmjs.com/package/@ngneat/spectator)

```ts
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { NgxFeatureFlagsTestingModule } from '../../lib/ngx-feature-flags-testing.module';
import { DirectiveTestsComponent } from './directive-tests.component';

describe('Import without configuration', () => {
  let spectator: Spectator<DirectiveTestsComponent>;
  const createComponent = createComponentFactory({
    imports: [NgxFeatureFlagsTestingModule],
    component: DirectiveTestsComponent,
  });

  beforeEach(() => (spectator = createComponent()));
  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should display "FeatureB is disabled', () => {
    expect(spectator.query('p')).toHaveText('FeatureB is disabled');
  });
});

describe('Import with flag configuration enabled', () => {
  let spectator: Spectator<DirectiveTestsComponent>;
  const createComponent = createComponentFactory({
    imports: [NgxFeatureFlagsTestingModule.withFeatureFlag('featureB', true)],
    component: DirectiveTestsComponent,
  });

  beforeEach(() => (spectator = createComponent()));
  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should display "FeatureB is enabled', () => {
    expect(spectator.query('p')).toHaveText('FeatureB is enabled');
  });
});

describe('Import with flag configuration disabled', () => {
  let spectator: Spectator<DirectiveTestsComponent>;
  const createComponent = createComponentFactory({
    imports: [NgxFeatureFlagsTestingModule.withFeatureFlag('featureB', false)],
    component: DirectiveTestsComponent,
  });

  beforeEach(() => (spectator = createComponent()));
  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should display "FeatureB is disabled', () => {
    expect(spectator.query('p')).toHaveText('FeatureB is disabled');
  });
});
```

### Set a specific feature flag

```ts
beforeEach(() => {
    TestBed.configureTestingModule({imports: [NgxFeatureFlagsTestingModule]});
    configure = TestBed.get(NgxFeatureFlagsConfigurationService);
    service = TestBed.get(NgxFeatureFlagsService);
  });

  it('should disable feature', () => {
    // Enable a specific feature
    configure.setFeatureFlag('feature', true);
    expect(service.featureOn('feature')).toBeTrue();
    //disable a specific feature
    configure.setFeatureFlag('feature', false);
    expect(service.featureOn('feature')).toBeFalse();
    // Toggle the state of a specific feature
    configure.toggleFeatureFlag('feature');
    expect(service.featureOn('feature')).toBeTrue());
  });
```

## FAQ

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
