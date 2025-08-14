import Graphs from "./Graphs";
import Stats from "./Stats";

const Dashboard = () => {
    return (
        <div className="p-4 bg-white min-h-screen rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <Stats />
            <Graphs />
        </div>
    );
};

export default Dashboard;
