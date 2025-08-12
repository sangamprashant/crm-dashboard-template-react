import { PageHeader } from "../../components";

const CompletedBookings = () => {
    const completed = [
        { id: "B001", customer: "John Doe", date: "2025-08-10" },
        { id: "B004", customer: "Alice Johnson", date: "2025-08-09" },
    ];

    return (
        <>
            <PageHeader title="Completed Bookings" />
            <div className="bg-white p-4 rounded shadow">
                <ul className="space-y-2">
                    {completed.map((booking) => (
                        <li
                            key={booking.id}
                            className="border p-2 rounded flex justify-between"
                        >
                            <span>{booking.customer}</span>
                            <span className="text-gray-500">{booking.date}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default CompletedBookings;
