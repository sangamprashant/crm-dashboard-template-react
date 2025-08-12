import { useState } from "react";
import { PageHeader } from "../../components";
import Tabs from "../../components/(reuse)/Tabs";
import CompletedBookings from "./CompletedBookings";
import CreateBooking from "./CreateBooking";
import PaymentReceived from "./PaymentReceived";
import SearchBookings from "./SearchBookings";

type TabType = "search" | "create" | "payment" | "completed";

const Bookings = () => {
    const [activeTab, setActiveTab] = useState<TabType>("search");

    return (
        <>
            <PageHeader title="Bookings" />
            <div className="p-4 bg-gray-50 min-h-screen">
                <Tabs
                    tabs={[
                        { id: "search", label: "Search", content: <SearchBookings /> },
                        { id: "create", label: "Create Booking", content: <CreateBooking /> },
                        { id: "payment", label: "Payment Received", content: <PaymentReceived /> },
                        { id: "completed", label: "Completed", content: <CompletedBookings /> },
                    ]}
                    activeTab={activeTab}
                    onChange={(id) => setActiveTab(id)}
                />
            </div>
        </>
    );
};

export default Bookings;
