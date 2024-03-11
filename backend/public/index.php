<?php

    define("APP_ROOT", dirname(__DIR__));
    require APP_ROOT . '/vendor/autoload.php';
    require APP_ROOT . '/src/App/Database.php';

    $app = new \Slim\App;

    require '../src/App/routes.php';

    $app->run();