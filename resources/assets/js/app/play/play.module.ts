import { NgModule } from '@angular/core';
import { PlayComponent } from './play.component';
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        PlayComponent
    ],
    imports: [RouterModule],
    exports: [
        PlayComponent
    ]
})
export class PlayModule {
}
