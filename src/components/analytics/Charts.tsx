import { Area, AreaChart, Bar, BarChart, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const leadStatusData = [
    { status: "New", count: 35 },
    { status: "Pending", count: 20 },
    { status: "Confirmed", count: 15 },
    { status: "Cancelled", count: 8 },
    { status: "Completed", count: 5 },
];

const leadsOverTime = [
    { date: "Jan", leads: 10 },
    { date: "Feb", leads: 30 },
    { date: "Mar", leads: 20 },
    { date: "Apr", leads: 40 },
    { date: "May", leads: 60 },
    { date: "Jun", leads: 50 },
];

const leadSources = [
    { name: "Website", value: 45 },
    { name: "Social Media", value: 30 },
    { name: "Referral", value: 25 },
];

const popularDestinations = [
    { destination: "Paris", count: 50 },
    { destination: "Dubai", count: 40 },
    { destination: "Maldives", count: 35 },
    { destination: "Bali", count: 30 },
    { destination: "New York", count: 20 },
];

const pendingLeads = [
    { name: "Pending", value: 45 },
    { name: "Processed", value: 55 },
];

const revenueData = [
    { month: "Jan", revenue: 5000 },
    { month: "Feb", revenue: 7000 },
    { month: "Mar", revenue: 6000 },
    { month: "Apr", revenue: 9000 },
    { month: "May", revenue: 12000 },
    { month: "Jun", revenue: 15000 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AnalyticsComponent = () => {
    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Lead Status */}
                <div className="bg-white p-4 shadow-md rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Lead Status</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={leadStatusData}>
                            <XAxis dataKey="status" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="count" fill="#3182CE" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Leads Over Time */}
                <div className="bg-white p-4 shadow-md rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Leads Over Time</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={leadsOverTime}>
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="leads" stroke="#FF4500" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Lead Sources */}
                <div className="bg-white p-4 shadow-md rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Lead Sources</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie data={leadSources} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                                {leadSources.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Popular Destinations */}
                <div className="bg-white p-4 shadow-md rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Popular Destinations</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={popularDestinations}>
                            <XAxis dataKey="destination" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="count" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Pending Leads */}
                <div className="bg-white p-4 shadow-md rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Pending Leads</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie data={pendingLeads} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} innerRadius={50}>
                                {pendingLeads.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Monthly Revenue */}
                <div className="bg-white p-4 shadow-md rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Monthly Revenue</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <AreaChart data={revenueData}>
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="revenue" stroke="#34D399" fill="#A7F3D0" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsComponent;
