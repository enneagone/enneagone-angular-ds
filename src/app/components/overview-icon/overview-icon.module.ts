import {NgModule} from '@angular/core';
import {OverviewIconComponent} from './overview-icon.component';
import {IconModule} from '../../../../projects/enneagone-angular-ds/src/public-api';

@NgModule({
    declarations: [
        OverviewIconComponent
    ],
    imports: [
        IconModule
    ],
    exports: [
        OverviewIconComponent
    ]
})
export class OverviewButtonModule { }
