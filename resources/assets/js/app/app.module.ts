import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayModule } from "./play/play.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        PlayModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
