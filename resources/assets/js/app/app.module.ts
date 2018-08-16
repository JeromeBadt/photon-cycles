import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HomeModule } from "./home/home.module";
import { MenuModule } from "./menu/menu.module";
import { PlayModule } from "./play/play.module";
import { RankingsComponent } from "./rankings/rankings.component";
import { HelpComponent } from "./help/help.component";
import { RankingsModule } from "./rankings/rankings.module";
import { HelpModule } from "./help/help.module";
import { PlayComponent } from "./play/play.component";

const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: "menu", component: MenuComponent},
    {path: "rankings", component: RankingsComponent},
    {path: "help", component: HelpComponent},
    {path: "play", component: PlayComponent},
    {path: "**", component: HomeComponent}
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HomeModule,
        MenuModule,
        RankingsModule,
        PlayModule,
        RankingsModule,
        HelpModule,
        RouterModule.forRoot(routes, {useHash: true})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
