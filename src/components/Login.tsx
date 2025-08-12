import { Link } from "react-router-dom";
import { LoginForm } from "./login/LoginForm";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Left Section (Login Form) */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        {/* Icon + Title */}
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

            {/* Right Section (Background & Info) */}
            <div className="hidden lg:block lg:w-1/2 relative">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('/login.png')` }}
                    aria-hidden="true"
                />
                <div className="absolute inset-0 bg-black/80" aria-hidden="true"></div>

                <div className="relative z-10 flex items-center justify-center w-full h-full">
                    <div className="text-center text-white px-8 py-6 rounded-lg shadow-lg max-w-md">
                        {/* Project Title */}
                        <h2 className="text-4xl font-bold mb-4 text-blue-500">Admin Access Portal</h2>
                        <p className="text-lg mb-3">
                            Only authorized personnel can access this panel. Keep your credentials secure.
                        </p>

                        {/* Login Guidelines */}
                        <p className="text-red-500 text-lg font-semibold">
                            Demo mode: Enter a valid email & password to access the dashboard.
                        </p>
                        <p className="text-yellow-400 text-sm mt-2">
                            Email must be in proper format (<span className="underline">user@example.com</span>)  
                            and password should be at least <b>6 characters</b> with letters & numbers.
                        </p>

                        {/* GitHub Link */}
                        <Link
                            to="https://github.com/sangamprashant/crm-dashboard-template-react"
                            className="inline-block mt-5 text-lg font-medium text-blue-400 hover:text-blue-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            📂 View on GitHub
                        </Link>

                        {/* Reset Project Instructions */}
                        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                            Want to build your own CRM dashboard?  
                            Use this template & start fresh by running:
                            <br />
                            <code className="bg-gray-800 px-2 py-1 rounded text-green-400">npm run reset-project</code>
                            <span className="text-gray-400 mx-1">or</span>
                            <code className="bg-gray-800 px-2 py-1 rounded text-green-400">yarn reset-project</code>
                        </p>

                        {/* GitHub Star & Fork */}
                        <div className="mt-6 space-y-2">
                            <p className="text-sm text-green-400 font-medium">
                                ⭐ Like this project? Give it a star on GitHub!
                            </p>
                            <p className="text-sm text-purple-400 font-medium">
                                🍴 Want to customize it? Fork the repo & start building.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
