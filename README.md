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

Implement these functionalities to app.component and test the application.

### Backup branch

backup branch exists [here](https://github.com/devonfw-ng-adv-training/refresher/tree/2-start-exercise-two) and will be used in the next step


# Exercise Two: setting up a state for counter

We will want to store the counter state in our store. What do we have to do?

## Part 1: setting up the root state

create root state (we call it `AppState` in this project)

- create file `index.ts` in `src/app/reducers`
- define & export application state (empty interface `AppState`)
- define & export root reducer (empty object of ActionReducerMap`<AppState`>)
- import root reducer in `StoreModule` in `app.module.ts`

Does your application still work? How does the state in Redux Devtools now look like?

### Backup branch

backup branch exists [here](https://github.com/devonfw-ng-adv-training/refresher/tree/3-start-exercise-two-pt-two) and will be used in the next step

## Part 2: setting up the counter state

hint: for easier setup, you can install and use [@ngrx/schematics](https://ngrx.io/guide/schematics)
    
    ng add @ngrx/schematics

We now want to store the partial state `CounterState` in `AppState`. You can use schematics for this, or go step by step whatever is your preferred option.

### Doings

- *(optional) create a module for counter state*
- create file `counter.reducer.ts`
- define & export counter state
- define & export reducer functions
- add state & reducer to AppState & AppReducer


### solution with schematics

#### *(optional) add module*

      ng generate module counter --flat false

#### generate feature store via cli

      ng generate @ngrx/schematics:store counter/Counter -m counter.module.ts

#### in `src/app/counter/reducers/index.ts`

    - rename `State` to `CounterState` 
    - remove meta reducer
    - add initial state

          export const initialState: CounterState = {
            value: 0
          };

    - create reducer function

          const counterReducer = createReducer(
            initialState,
          );

          export function reducer(state: CounterState | undefined, action: Action) {
            return counterReducer(state, action);
          }

#### in `src/app/reducers/index.ts`

- add `CounterState` to `AppState`
- add `reducer` to `reducers`

#### verify result with redux devtools

fire up the application and check out if the value on Redux DevTools is correctly set to initial value of 0

![counter-value-initialized](https://user-images.githubusercontent.com/13346973/84502696-22bd9b00-acb9-11ea-8ff3-3dcdc3daefd2.png)*counter shall be initialized*


### Backup branch

backup branch exists [here](https://github.com/devonfw-ng-adv-training/refresher/tree/4-exercise-three-wiring-up-the-counter) and will be used in the next step


## Exercise Three: wiring up the counter to the state

We now want to use the counter state to display the value

For this we have the following doings:

### Doings

- create counter component
- extract business logic from app component to counter component
- use counter component in app component
- verify stable application
- inject `Store<AppState>` to counter component
- display `value` of `CounterState` in parallel to component value

### Backup branch

backup branch exists [here](https://github.com/devonfw-ng-adv-training/refresher/tree/5-exercise-four-using-selectors) and will be used in the next step

## Exercise Four: using ngrx selectors

Up next we will create a [selector](https://ngrx.io/guide/store/selectors) for displaying the value. This has many advantages. One of them is information hiding, so we only get information which is relevant in the specific component. For us it's the value of counter.

### Doings

- create feature selector for `counter` via @ngrx/schematics
- create specific selector for `value` of `CounterState`
- use selector in `counter.component.ts`

### Backup branch

backup branch exists [here](https://github.com/devonfw-ng-adv-training/refresher/tree/6-exercise-five-using-actions-and-wiring-them) and will be used in the next step

## Exercise Five: using ngrx actions

