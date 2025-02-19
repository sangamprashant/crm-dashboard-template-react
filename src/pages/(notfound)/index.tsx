import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa"; // Import React Icon
import { PageHeader } from "../../components";

const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-between h-[100vh] text-center">
            <PageHeader title="Page Not Found" icon={<FaExclamationTriangle />} />
            <div className="flex flex-col items-center justify-center flex-grow">
                <FaExclamationTriangle className="text-red-600 text-6xl mb-4" /> {/* Warning Icon */}
                <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
                <p className="text-lg mt-2 text-gray-700">Sorry, the page you are looking for does not exist.</p>
                <Link to="/" className="mt-4 px-4 py-2 flex items-center gap-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    <span>Go to Home</span>
                </Link>
            </div>

            {/* Footer */}
            <footer className="w-full bg-gray-900 text-white text-center py-4">
                <p>No page found. Contact the developer for maintenance or service support.</p>
            </footer>
        </div>
    );
};

export default NotFound;
