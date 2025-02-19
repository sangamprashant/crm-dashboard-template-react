import { LoginForm } from "./login/LoginForm";
import { FaSignInAlt } from "react-icons/fa"; // React Icons

function Login() {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Left Section (Login Form) */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <div className="text-center mb-4">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                                <FaSignInAlt className="text-blue-600 text-2xl" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Welcome Back!</h2>
                            <p className="text-gray-600 mt-2">Please sign in to continue</p>
                        </div>
                        <LoginForm />
                    </div>
                </div>
            </div>

            {/* Right Section (Background Image) */}
            <div className="hidden lg:block lg:w-1/2 relative">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('/login.jpg')` }}
                    aria-hidden="true"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="text-center text-white px-12">
                        <h2 className="text-4xl font-bold mb-6">Admin Access Portal</h2>
                        <p className="text-xl">Only authorized personnel can access this panel. Ensure secure login credentials.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
