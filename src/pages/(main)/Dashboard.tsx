import Featured from "./dashboard/Featured";
import Graphs from "./dashboard/Graphs";
import Stats from "./dashboard/Stats";

const Dashboard = () => {


    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Travel Dashboard</h1>
            <Stats />
            <Featured />
            <Graphs />
        </div>
    );
};

export default Dashboard;
