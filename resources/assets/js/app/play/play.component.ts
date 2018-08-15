import { Component } from '@angular/core';

declare var UnityLoader: any;
declare var UnityProgress: any;

@Component({
    selector: 'app-play',
    templateUrl: './play.component.html',
    styleUrls: ['./play.component.css']
})
export class PlayComponent {
    gameInstance = UnityLoader.instantiate(
        "gameContainer",
        "unity-build/Build.json",
        {onProgress: UnityProgress}
    );
}
