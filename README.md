# ProjectE9DsApp

Design system for Alexandrie project based on Material library.

Storybook: https://gracious-einstein-69a213.netlify.app  
Notions: https://www.notion.so/Angular-project-228ddbb744174f91afedb34e45046ea1  
Figma: https://www.figma.com/file/5LsJ7igbnjAzjgDQpLlXk6/Alexandrie?node-id=0%3A1  
Design system scheme: 

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

Start application:
```
yarn start
```
Launch Storybook:  
```
yarn storybook
```
## Create a component

#### Generate a new angular component:  

```
ng generate component name-of-your-component
```

More informations: https://angular.io/cli/generate

#### Integrate it to Storybook:


Create a *../src/stories/name-of-your-component.stories.js* file, and write your story like this:

```
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {ButtonsModule} from '../app/buttons/buttons.module';
import {ButtonsComponent} from '../app/buttons/buttons.component';

storiesOf('Buttons', module)
  .addDecorator(moduleMetadata({ imports: [ ButtonsModule ]}))
  .add('Basic Button', () => ({
    component: ButtonsComponent,
    props: {
      Score: 0
    },
  }))

```

More informations: https://storybook.js.org/docs/guides/guide-angular/
