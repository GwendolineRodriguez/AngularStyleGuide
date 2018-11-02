# Angular Style Guide
<br/>
<p align="center">
This is a simple style guide to use with Angular
<br/><br/>
<img src="./angular_logo.svg" width="250">
<img src="./screenshot1.png" width="250">

</p>
<br/>


## Table of Contents
- [Getting Started](#GettingStarted): **Unix and C Basics**
    - The famous Epitech "Pool", 4 weeks of intense programming to learn all the basics of programmation.


<a name="GettingStarted"></a>

# Getting Started - Local Development

## Installation
To get started locally, follow these instructions:

1. If you haven't done it already, [make a fork of this repo](https://github.com/angular/angular-cli/fork).
1. Clone to your local computer using `git`.
1. Make sure that you have Node 10.9 or later installed. See instructions [here](https://nodejs.org/en/download/). The Angular CLI requires Node 8, but development requires Node 10.
1. Make sure that you have `yarn` installed; see instructions [here](https://yarnpkg.com/lang/en/docs/install/).
1. Run `yarn` (no arguments) from the root of your clone of this project.
1. Run `yarn link` to add all custom scripts we use to your global install.

## Creating New Packages
Adding a package to this repository means running two separate commands:

1. `schematics devkit:package PACKAGE_NAME`. This will update the `.monorepo` file, and create the
  base files for the new package (package.json, src/index, etc).
1. `devkit-admin templates`. This will update the README and all other template files that might
  have changed when adding a new package.

For private packages, you will need to add a `"private": true` key to your package.json manually.
This will require re-running the template admin script.

# Packages

This is a monorepo which contains many tools and packages:



## Tools

| Project | Package | Version | Links |
|---|---|---|---|
**Angular CLI** | [`@angular/cli`](https://npmjs.com/package/@angular/cli) | [![latest](https://img.shields.io/npm/v/%40angular%2Fcli/latest.svg)](https://npmjs.com/package/@angular/cli) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/angular/angular-cli/blob/master/packages/angular/cli/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/cli-builds)
**Schematics CLI** | [`@angular-devkit/schematics-cli`](https://npmjs.com/package/@angular-devkit/schematics-cli) | [![latest](https://img.shields.io/npm/v/%40angular-devkit%2Fschematics-cli/latest.svg)](https://npmjs.com/package/@angular-devkit/schematics-cli) |  [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/angular-devkit-schematics-cli-builds)


## Packages


| Project | Package | Version | Links |
|---|---|---|---|
**Architect** | [`@angular-devkit/architect`](https://npmjs.com/package/@angular-devkit/architect) | [![latest](https://img.shields.io/npm/v/%40angular-devkit%2Farchitect/latest.svg)](https://npmjs.com/package/@angular-devkit/architect) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/angular/angular-cli/blob/master/packages/angular_devkit/architect/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/angular-devkit-architect-builds)
**Architect CLI** | [`@angular-devkit/architect-cli`](https://npmjs.com/package/@angular-devkit/architect-cli) | [![latest](https://img.shields.io/npm/v/%40angular-devkit%2Farchitect-cli/latest.svg)](https://npmjs.com/package/@angular-devkit/architect-cli) |  [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/angular-devkit-architect-cli-builds)
**Build Angular** | [`@angular-devkit/build-angular`](https://npmjs.com/package/@angular-devkit/build-angular) | [![latest](https://img.shields.io/npm/v/%40angular-devkit%2Fbuild-angular/latest.svg)](https://npmjs.com/package/@angular-devkit/build-angular) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/angular/angular-cli/blob/master/packages/angular_devkit/build_angular/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/angular-devkit-build-angular-builds)
**Build NgPackagr** | [`@angular-devkit/build-ng-packagr`](https://npmjs.com/package/@angular-devkit/build-ng-packagr) | [![latest](https://img.shields.io/npm/v/%40angular-devkit%2Fbuild-ng-packagr/latest.svg)](https://npmjs.com/package/@angular-devkit/build-ng-packagr) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/angular/angular-cli/blob/master/packages/angular_devkit/build_ng_packagr/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/angular-devkit-build-ng-packagr-builds)
**Build Optimizer** | [`@angular-devkit/build-optimizer`](https://npmjs.com/package/@angular-devkit/build-optimizer) | [![latest](https://img.shields.io/npm/v/%40angular-devkit%2Fbuild-optimizer/latest.svg)](https://npmjs.com/package/@angular-devkit/build-optimizer) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/angular/angular-cli/blob/master/packages/angular_devkit/build_optimizer/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/angular-devkit-build-optimizer-builds)
**Build Webpack** | [`@angular-devkit/build-webpack`](https://npmjs.com/package/@angular-devkit/build-webpack) | [![latest](https://img.shields.io/npm/v/%40angular-devkit%2Fbuild-webpack/latest.svg)](https://npmjs.com/package/@angular-devkit/build-webpack) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/angular/angular-cli/blob/master/packages/angular_devkit/build_webpack/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/angular-devkit-build-webpack-builds)
**Core** | [`@angular-devkit/core`](https://npmjs.com/package/@angular-devkit/core) | [![latest](https://img.shields.io/npm/v/%40angular-devkit%2Fcore/latest.svg)](https://npmjs.com/package/@angular-devkit/core) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/angular/angular-cli/blob/master/packages/angular_devkit/core/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/angular-devkit-core-builds)
**Schematics** | [`@angular-devkit/schematics`](https://npmjs.com/package/@angular-devkit/schematics) | [![latest](https://img.shields.io/npm/v/%40angular-devkit%2Fschematics/latest.svg)](https://npmjs.com/package/@angular-devkit/schematics) | [![README](https://img.shields.io/badge/README--green.svg)](https://github.com/angular/angular-cli/blob/master/packages/angular_devkit/schematics/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/angular-devkit-schematics-builds)

#### Schematics

| Project | Package | Version | Links |
|---|---|---|---|
**Angular PWA Schematics** | [`@angular/pwa`](https://npmjs.com/package/@angular/pwa) | [![latest](https://img.shields.io/npm/v/%40angular%2Fpwa/latest.svg)](https://npmjs.com/package/@angular/pwa) |  [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/angular-pwa-builds)
**Angular Schematics** | [`@schematics/angular`](https://npmjs.com/package/@schematics/angular) | [![latest](https://img.shields.io/npm/v/%40schematics%2Fangular/latest.svg)](https://npmjs.com/package/@schematics/angular) |  [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/schematics-angular-builds)
**Schematics Schematics** | [`@schematics/schematics`](https://npmjs.com/package/@schematics/schematics) | [![latest](https://img.shields.io/npm/v/%40schematics%2Fschematics/latest.svg)](https://npmjs.com/package/@schematics/schematics) |  [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/schematics-schematics-builds)
**Package Update Schematics** | [`@schematics/update`](https://npmjs.com/package/@schematics/update) | [![latest](https://img.shields.io/npm/v/%40schematics%2Fupdate/latest.svg)](https://npmjs.com/package/@schematics/update) |  [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/schematics-update-builds)

#### Misc

| Project | Package | Version | Links |
|---|---|---|---|
**Webpack Angular Plugin** | [`@ngtools/webpack`](https://npmjs.com/package/@ngtools/webpack) | [![latest](https://img.shields.io/npm/v/%40ngtools%2Fwebpack/latest.svg)](https://npmjs.com/package/@ngtools/webpack) |  [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/ngtools-webpack-builds)
