import Graphs from "./dashboard/Graphs";
import Stats from "./dashboard/Stats";

const Dashboard = () => {
    return (
        <div className="p-4 bg-white min-h-screen rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Travel Dashboard</h1>
            <Stats />
            <Graphs />

            {/* Info Box */}
            <div className="p-4 bg-gray-50 rounded shadow my-5">
                {/* GitHub Link */}
                <a
                    href="https://github.com/sangamprashant/crm-dashboard-template-react"
                    className="inline-block mt-5 text-lg font-medium text-blue-500 hover:text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    📂 View on GitHub
                </a>

                {/* Reset Project Instructions */}
                <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                    Want to build your own CRM dashboard?
                    Use this template & start fresh by running:
                    <br />
                    <code className="bg-gray-200 px-2 py-1 rounded text-green-600">npm run reset-project</code>
                    <span className="text-gray-500 mx-1">or</span>
                    <code className="bg-gray-200 px-2 py-1 rounded text-green-600">yarn reset-project</code>
                </p>

                {/* GitHub Star & Fork */}
                <div className="mt-6 space-y-2">
                    <p className="text-sm text-green-600 font-medium">
                        ⭐ Like this project? Give it a star on GitHub!
                    </p>
                    <p className="text-sm text-purple-600 font-medium">
                        🍴 Want to customize it? Fork the repo & start building.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
