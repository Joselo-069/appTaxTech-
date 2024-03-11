<?php
    use App\Middleware\ResponseHeader;
    use Tuupola\Middleware\CorsMiddleware;

    $app = new \Slim\App([
        'settings' => [
            'displayErrorDetails' => true
        ]
    ]);

    $app->add(new ResponseHeader());

    $app->get("/listclients", App\Controllers\ClientController::class.":getAll");
    $app->get("/detailclient/{dni:[0-9]+}", App\Controllers\ClientController::class.":getDetail");
    $app->post("/createclient", App\Controllers\ClientController::class.":create");
    $app->put("/updateclient/{dni:[0-9]+}", App\Controllers\ClientController::class.":update");
    $app->delete("/deleteclient/{dni:[0-9]+}", App\Controllers\ClientController::class.":delete");