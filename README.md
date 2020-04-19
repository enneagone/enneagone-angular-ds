# # EnneagoneAngularDs

Design system for Alexandrie project.

Storybook: https://gracious-einstein-69a213.netlify.app  
Notions: https://www.notion.so/Angular-project-228ddbb744174f91afedb34e45046ea1  
Figma: https://www.figma.com/file/5LsJ7igbnjAzjgDQpLlXk6/Alexandrie?node-id=0%3A1  
Design system color scheme: 

## Installation

#### Yarn  
Windows: 
https://classic.yarnpkg.com/latest.msi

Debian/Ubuntu:
```
sudo apt-get update && sudo apt-get install yarn
```

#### Angular CLI
```
yarn global add @angular/cli
```

## Commands

Launch Storybook:  

```
yarn storybook
```

## Create a component

#### Generate a new angular component:  

```
ng generate component name-of-your-component --project=enneagone-angular-ds 
```

More informations: https://angular.io/cli/generate

#### Integrate it to Storybook:

Build the library to use internally:
```
yarn build enneagone-angular-ds
```

Pack it to a tarball:
```
yarn pack
```

Add the tarball library to the package.json:
```
yarn add file:enneagone-angular-ds-v0.0.2.tgz
```

Create a *../src/stories/name-of-your-component.stories.js* file, and write your story like this:

```
import { storiesOf } from '@storybook/angular';
import { ButtonComponent } from 'enneagonne-angular-ds'; <-- Import component from the library

storiesOf('button', module)
  .add('basic', () => ({
    component: ButtonComponent,
    props: {
      text: 'hello'
    }
  }))
```

More informations: https://storybook.js.org/docs/guides/guide-angular/

## Deploy to npm

Don't forget to add a tag for the version:
```
git tag v0.1.0
```

Increment version in package.json
