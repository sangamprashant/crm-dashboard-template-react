import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthenticationContext";

export const LoginForm = () => {
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleLogin = () => {
        const userData = { id: "123", name: "John Doe", email: "john@example.com" };
        const token = "sample_jwt_token_123";
        login(userData, token);
        navigate("/")
    };
    return (
        <>
            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <div className="relative">
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                            placeholder="you@example.com"
                            autoComplete="false"
                        />
                        <i className="fas fa-envelope absolute right-2 top-4 w-6 h-6 text-gray-400"></i>
                    </div>
                    <p x-show="email && !validateEmail(email)" className="mt-2 text-sm text-red-600">Please enter a valid email address</p>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <div className="relative">
                        <input
                            type="password"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                            placeholder="••••••••"
                            autoComplete="false"
                        />

                    </div>
                    <p x-show="password && !validatePassword(password)" className="mt-2 text-sm text-red-600">Password must be at least 8 characters</p>
                </div>

                <div x-show="!isLogin" className="mb-4 transition-all duration-300 ease-out">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                    <div className="relative">
                        <input
                            type="password"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-colors"
                            placeholder="••••••••"
                            autoComplete="false"
                        />
                    </div>
                    <p x-show="confirmPassword && !validateConfirmPassword()" className="mt-2 text-sm text-red-600">Passwords do not match</p>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <span className="inline-flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                    </span>
                    <span>Sign In</span>
                </button>
            </form>
        </>
    )
}
