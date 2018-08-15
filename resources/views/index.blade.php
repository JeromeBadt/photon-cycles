<!doctype html>
<!--suppress HtmlUnknownTarget -->
<html lang="{{ app()->getLocale() }}">
    <head>
        <title>Photon Cycles</title>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" type="text/css" href="build/semantic.superhero.min.css">
        <script
                src="https://code.jquery.com/jquery-3.1.1.min.js"
                integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
                crossorigin="anonymous"></script>
        <script src="build/semantic.min.js"></script>

        <script src="unity-build/UnityProgress.js"></script>
        <script src="unity-build/UnityLoader.js"></script>
    </head>
    <body>
        <app-root></app-root>

        <script src="build/polyfills.js"></script>
        <script src="build/main.js"></script>
    </body>
</html>
