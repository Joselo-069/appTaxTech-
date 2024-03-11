<?php
    declare(strict_types=1);

    namespace App\Requests;

    use App\Repositories\ClientRepository;
    use Respect\Validation\Validator as v;
    use Respect\Validation\Exceptions\NestedValidationException;

    class ClientRequest
    {
        public static function validate(array $data): void
        {
            $validator = v::key('dni', v::notEmpty()->alnum())
                            ->key('name', v::notEmpty()->stringType())
                            ->key('lastname', v::notEmpty()->stringType())
                            ->key('age', v::notEmpty()->intVal()->positive())
                            ->key('birthdate', v::notEmpty()->date('Y-m-d'));
            try {
                $validator->assert($data);

                $clientRepository = new ClientRepository();
                $existingClient = $clientRepository->getById((int)$data['dni']);

                if ($existingClient) {
                    throw new \InvalidArgumentException(json_encode(['error' => 'El DNI ya está registrado']));
                }

            } catch (NestedValidationException $exception) {
                $messages = $exception->getMessages();
                throw new \InvalidArgumentException(json_encode(['error' => $messages]));
            }
        }
    }