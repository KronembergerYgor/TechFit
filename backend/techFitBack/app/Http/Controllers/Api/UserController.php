<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function store(Request $request)
{
    $validator = Validator::make($request->all(), [
        'name'          => ['required', 'string', 'max:255'],
        'email'         => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
        'password'      => ['required', 'string', 'min:8', 'confirmed'],
        'role_id'       => ['required', 'integer', 'exists:roles,id'],
        'cell_phone'    => ['nullable', 'string', 'size:11'],
    ], [
        'name.required'      => 'O nome é obrigatório.',
        'name.max'           => 'O nome não pode ter mais que 255 caracteres.',
        'email.required'     => 'O e-mail é obrigatório.',
        'email.email'        => 'Digite um e-mail válido.',
        'email.unique'       => 'Esse e-mail já está cadastrado.',
        'password.required'  => 'A senha é obrigatória.',
        'password.min'       => 'A senha precisa ter no mínimo 8 caracteres.',
        'password.confirmed' => 'As senhas não coincidem.',
        'role_id.required'   => 'Selecione um tipo de usuário.',
        'role_id.exists'     => 'O tipo de usuário selecionado é inválido.',
        'cell_phone.size'    => 'O celular informado deve ter exatamente 11 dígitos.',
    ]);

    if ($validator->fails()) {
        return response()->json([
            'message' => 'Erro de validação',
            'errors'  => $validator->errors(),
        ], 422);
    }

    $validated = $validator->validated();

    Log::info('role_id recebido:', ['role_id' => $validated['cell_phone']]);

    $status_active = intval($validated['role_id']) === 1 ? 1 : 0;

    $user = User::create([
        'name'          => $validated['name'],
        'email'         => $validated['email'],
        'password'      => Hash::make($validated['password']),
        'role_id'       => $validated['role_id'],
        'status_active' => $status_active,
        'cell_phone'    => $validated['cell_phone'] ?? null,
    ]);

    return response()->json([
        'message' => 'Usuário cadastrado com sucesso',
        'user'    => $user,
    ], 201);
}

}