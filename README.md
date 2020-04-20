[![CircleCI](https://circleci.com/gh/enneagone/enneagone-angular-ds.svg?style=svg)](https://circleci.com/gh/enneagone/enneagone-angular-ds)

# # EnneagoneAngularDs

Design system for Alexandrie project.

Storybook: https://gracious-einstein-69a213.netlify.app  
Notions: https://www.notion.so/Angular-project-228ddbb744174f91afedb34e45046ea1  
Figma: https://www.figma.com/file/5LsJ7igbnjAzjgDQpLlXk6/Alexandrie?node-id=0%3A1 

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
ng generate component name-of-your-component --project=enneagone-angular-ds --skip-import 
```

More informations: https://angular.io/cli/generate

Add it to the public-api.ts:
```
export * from './lib/name-of-folder-component/name-of-your-component.component';
```

#### Integrate it to Storybook:

Build the library:
```
yarn build enneagone-angular-ds
```

Pack it to a tarball to use it locally:
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

Npm deployement is automatical on master and it follow a gitmoji convention in commit message:

### Increment Major version(breaking change):

* :boom:

### Increment Minor version(feat):

* :sparkles:

### Increment Patch version:

* :bug:
* :ambulance:
* :lipstick:
* :lock:
* :zap:
* :apple:
* :penguin:
* :checkered_flag:
* :robot:
* :green_apple:
* :chart_with_upwards_trend:
* :globe_with_meridians:
* :alien:
* :wheelchair:
* :loud_sound:
* :mute:
* :mag:
* :children_crossing:
* :speech_balloon:
* :iphone:
* :pencil2:
* :bento:

