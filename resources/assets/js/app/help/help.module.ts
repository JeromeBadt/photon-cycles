import { NgModule } from '@angular/core';
import { HelpComponent } from './help.component';
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        HelpComponent
    ],
    imports: [RouterModule],
    exports: [
        HelpComponent
    ]
})
export class HelpModule {
}
