import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingsComponent } from './rankings.component';
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        RankingsComponent
    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [
        RankingsComponent
    ]
})
export class RankingsModule {
}
