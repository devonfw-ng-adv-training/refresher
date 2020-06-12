# NgAdvRefresher

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# Basic Setup of ngrx

### Check out project
    
    git clone https://github.com/devonfw-ng-adv-training/ngrx.git 

### Install dependencies
    
    npm install 

### Add [@ngrx/store](https://ngrx.io/guide/store/install) &  [@ngrx/store-devtools](https://ngrx.io/guide/store-devtools/install) to project
    
    ng add @ngrx/store
    ng add @ngrx/store-devtools

### Install [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension) for your favorite browser
  
  - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools)
  - [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
  - [Internet Explorer](https://www.youtube.com/watch?v=oHg5SJYRHA0)

### Start the Application

    ng serve

### Confirm successful setup

Check out application state in the browser and confirm '@ngrx/state/init'

![Store initialized succesfully](https://user-images.githubusercontent.com/13346973/84490358-58f02000-aca3-11ea-919d-f90be2f998b3.png)
