import { LoginForm } from "./LoginForm";

function Login() {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Left Section (Login Form) */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 mx-auto">
                <div className="w-full max-w-md ">
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        {/* Icon + Title */}
                        <div className="text-center mb-4">
                            <h2 className="text-2xl font-bold text-gray-800">Welcome Back!</h2>
                            <p className="text-gray-600 mt-2">Please sign in to continue</p>
                        </div>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
