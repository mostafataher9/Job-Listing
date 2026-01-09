<?php
namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Http\Request; 

//You do NOT manually check passwords:
//Hash::check($request->password, $user->password);
//Laravel already does this internally when you call:
class AuthController extends Controller
{
        public function login(Request $request)
        {
            $credentials = $request->only('email', 'password');

            if (!Auth::attempt($credentials)) {
                return response()->json(['error' => 'Invalid credentials'], 401);
            }

            $user = Auth::user();

            $token = $user->createToken('token')->plainTextToken;

            return response()->json([
                'message' => 'Login was successful',
                'token' => $token,
                'user' => $user
            ]);
        }


        public function register(Request $request)
        {
           /*  NO — if name is empty : an empty string "" is NOT valid for:"name" => "required|string"
               In Laravel: required means: Field must exist , Field must NOT be empty, An empty string "" fails required. */
            $request->validate([
                    'name' => 'required|string',
                    'email' => 'required|email|unique:users',
                    'password' => 'required|min:6',
            ]);
            $user=User::create([
                'name' => $request-> name,
                'email' => $request-> email,
                'password' => Hash::make($request-> password),
                'role' => 'user', // default role
            ]);
    
            $token =$user->createToken('api-token')->plainTextToken;

            return response()->json([
                'message'=> 'The user is created successfully',
                'token' => $token,
                'user' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'role' => $user->role,
                ], ], 201);
        }

        public function logout(Request $request){
         
              $request->user()->currentAccessToken()->delete();

                return response()->json([
                    'message' => 'Logged out successfully'
                ]);
        }
}

?>