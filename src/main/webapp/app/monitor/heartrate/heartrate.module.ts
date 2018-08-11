import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Adaro6SharedModule } from 'app/shared';
import { ChartModule } from 'primeng/primeng';

import {
    HeartRateComponent,
    heartRateRoute
} from 'app/monitor/heartrate';

const DASHBOARD_STATES = [
    heartRateRoute
];

@NgModule({
    imports: [
        Adaro6SharedModule,
        ChartModule,
        RouterModule.forRoot(DASHBOARD_STATES, { useHash: true })
    ],
    declarations: [
        HeartRateComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Adaro6HeartRateModule {}
