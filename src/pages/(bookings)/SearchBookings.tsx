import { PageHeader } from "../../components";

const SearchBookings = () => {
    const dummyResults = [
        { id: "B001", customer: "John Doe", date: "2025-08-10" },
        { id: "B002", customer: "Jane Smith", date: "2025-08-11" },
    ];

    return (
        <>
            <PageHeader title="Search Bookings" />
            <div className="bg-white p-4 rounded shadow">
                <ul className="space-y-2">
                    {dummyResults.map((booking) => (
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

export default SearchBookings;
