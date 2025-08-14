import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
const Graphs = () => {

    const data = [
        { name: "Jan", bookings: 120, revenue: 5000 },
        { name: "Feb", bookings: 180, revenue: 7500 },
        { name: "Mar", bookings: 150, revenue: 6200 },
        { name: "Apr", bookings: 220, revenue: 9000 },
        { name: "May", bookings: 300, revenue: 12000 },
        { name: "Jun", bookings: 280, revenue: 11000 },
    ];

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Bookings Graph */}
                <div className="bg-white p-6 shadow rounded-lg">
                    <h2 className="text-lg font-bold mb-4">Monthly Bookings</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="bookings" stroke="#3b82f6" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Revenue Graph */}
                <div className="bg-white p-6 shadow rounded-lg">
                    <h2 className="text-lg font-bold mb-4">Monthly Revenue</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    )
}

export default Graphs