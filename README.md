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
    
    git clone https://github.com/devonfw-ng-adv-training/refresher

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

Check out application state in the browser and confirm *@ngrx/state/init* in the dev tools

![Store initialized succesfully](https://user-images.githubusercontent.com/13346973/84490358-58f02000-aca3-11ea-919d-f90be2f998b3.png "Example in Google Chrome")*Example in Google Chrome*

### Backup branch

backup branch exists [here](https://github.com/devonfw-ng-adv-training/refresher/tree/1-finished-ngrx-setup) and will be used in the next step

# Exercice One: adding a counter to app.component

We will want to create a counter functionality to a otherwise empty application. The counter has the following requirements

- display current counter, initial value 0
- increment by +1, +10, +100
- decrement by -1, -10, -100
- reset counter to initial value

![functionalities](https://user-images.githubusercontent.com/13346973/84493043-6a3b2b80-aca7-11ea-9f2a-0dd667c6425f.gif)*Exercise One: functionalities in action*

Implement these functionalities to app.component and test the application

# Exercise Two: setting up a state for counter

We will want to store the counter state in our store. What do we have to do?

- create `root.reducer.ts` in `src/app`
- define & export application state (empty interface `AppState`)
- define & export root reducer (empty object of ActionReducerMap`<AppState`>)
- import root reducer in `StoreModule` in `app.module.ts`

Does your application still work? How does the state in Redux Devtools now look like?
