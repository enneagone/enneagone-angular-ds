import {NgModule} from '@angular/core';
import {OverviewButtonComponent} from './overview-button.component';
import {ButtonModule} from '../../../../projects/enneagone-angular-ds/src/public-api';

@NgModule({
    declarations: [
        OverviewButtonComponent
    ],
    imports: [
        ButtonModule
    ],
    exports: [
        OverviewButtonComponent
    ]
})
export class OverviewButtonModule { }
