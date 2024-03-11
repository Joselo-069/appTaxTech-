<?php

    namespace App\Controllers;

    use App\Repositories\ClientRepository as ClientRepository;
    use App\Requests\ClientRequest;
    use \Psr\Http\Message\ServerRequestInterface as Request;
    use \Psr\Http\Message\ResponseInterface as Response;
    Class ClientController {

        private $clientRepository;

        public function __construct()  {
            $this->clientRepository = new ClientRepository();
        }

        public function getAll(Request $request, Response $response): Response {
            $clients = $this->clientRepository->getAll();

            if (empty($clients)) {
                $body = json_encode([
                    "message" => "No existen registros",
                ]);
                $response->getBody()->write($body);
                return $response->withStatus(404);
            }

            $body = json_encode($clients);
            $response->getBody()->write($body);
            return $response->withStatus(200);
        }

        public function getDetail(Request $request, Response $response, array $args): Response {
            $client = $this->clientRepository->getById($args['dni']);

            if (empty($client)) {
                $body = json_encode([
                    "message" => "No existen el cliente",
                ]);
                $response->getBody()->write($body);
                return $response->withStatus(404);
            }

            $body = json_encode($client);
            $response->getBody()->write($body);
            return $response->withStatus(200);
        }

        public function create(Request $request, Response $response): Response {
            try {
                $body = $request->getParsedBody();

                ClientRequest::validate($body);

                $newClient = $this->clientRepository
                        ->create(
                            $body["dni"],
                            $body["name"],
                            $body["lastname"],
                            $body["age"],
                            $body["birthdate"]);

                $body = json_encode([
                    "message" => "Cliente registrado",
                    "client" => $newClient
                ]);

                $response->getBody()->write($body);
                return $response->withStatus(201);
            } catch (\InvalidArgumentException $e) {
                $response->getBody()->write($e->getMessage());
                return $response->withStatus(400);
            }
        }

        public function update(Request $request, Response $response, array $args): Response {
            try {
                $body = $request->getParsedBody();
                $client = $this->clientRepository
                        ->update(
                            $args['dni'],
                            $body["name"],
                            $body["lastname"],
                            $body["age"],
                            $body["birthdate"],
                        );

                $body = json_encode([
                    "message" => "Cliente actualizado",
                    "client" => $client
                ]);

                $response->getBody()->write($body);
                return $response->withStatus(201);

            } catch (\InvalidArgumentException $e) {

                $response->getBody()->write($e->getMessage());
                return $response->withStatus(400);
            }
        }

        public function delete(Request $request, Response $response, array $args):Response {
            $body = $request->getParsedBody();
            $dni = $args["dni"];
            $id = $this->clientRepository
                    ->delete($dni);

            if ($id == 0) {
                $body = json_encode([
                    "message" => "El cliente ya no se encuentra registrado",
                ]);
                $response->getBody()->write($body);
                return $response->withStatus(404);
            }

            $body = json_encode([
                "message" => "Cliente eliminado",
                "id" => $dni
            ]);
            $response->getBody()->write($body);
            return $response->withStatus(201);
        }
    }