import type { TabsProps } from "antd";
import { Tabs } from "antd";
import { AiOutlineSearch, AiOutlinePlusCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";
import BookingSearch from "./BookingSearch";
import CreateLeadForm from "../leads/LeadCreate";

const onChange = (key: string) => {
    console.log("Selected Booking Type:", key);
};

// Define booking categories
const bookingTypes = [
    "Search",
    "Add Booking",
    "Payment Received",
    "Completed",
] as const;

// Define corresponding icons
const bookingIcons = [
    <AiOutlineSearch />, // Search
    <AiOutlinePlusCircle />, // Add Booking
    <MdOutlinePayment />, // Payment Received
    <AiOutlineCheckCircle />, // Completed
];

// Generate tab items with icons
const items: TabsProps["items"] = bookingTypes.map((booking, index) => ({
    key: (index + 1).toString(),
    label: (
        <span className="flex items-center gap-2">
            {bookingIcons[index]} {booking}
        </span>
    ),
    children: booking === "Search" ? <BookingSearch /> : booking === "Add Booking" ? <CreateLeadForm /> : <div>Content for {booking}</div>,
}));

const BookingSelector = () => {
    return (
        <div className="px-4 py-2 bg-gray-100 rounded-lg shadow">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    );
};

export default BookingSelector;
