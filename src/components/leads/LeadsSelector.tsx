import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { useEffect, useState } from "react";
import { fetchLeadsByType } from "../../utilities";
import { Lead } from "../../types/leads";
import LeadsContainerView from "./LeadsContainer";
import { AiOutlineSearch, AiOutlineUserAdd, AiOutlineFire, AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { MdOutlinePayment, MdOutlineContactMail } from "react-icons/md";
import LeadsSearch from "./LeadsSearch";
import LeadCreate from "./LeadCreate";

const onChange = (key: string) => {
    console.log("Selected Lead Type:", key);
};

// Define an array of lead types
export const leadsType = [
    "Search",
    "Create",
    "New Leads",
    "Attempted Contact (1)",
    "Attempted Contact (2)",
    "Connected",
    "Prospect",
    "Hot Leads",
    "Payment Received",
    "Not Interested",
] as const;

// Define corresponding icons for each lead type
const leadIcons = [
    <AiOutlineSearch />, // Search
    <AiOutlineUserAdd />, // Create
    <AiOutlineUserAdd />, // New Leads
    <MdOutlineContactMail />, // Attempted Contact (1)
    <MdOutlineContactMail />, // Attempted Contact (2)
    <AiOutlineCheckCircle />, // Connected
    <AiOutlineFire />, // Prospect
    <AiOutlineFire />, // Hot Leads
    <MdOutlinePayment />, // Payment Received
    <AiOutlineCloseCircle />, // Not Interested
];

// leads container
const LeadsContainer = ({ lead }: LeadsContainerProps) => {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, [lead]);

    const fetchData = async () => {
        setLoading(true);
        const data = await fetchLeadsByType(lead);
        setLeads(data);
        setLoading(false);
    };

    return (
        <div className="p-4">
            {loading ? (
                <p className="text-gray-600">Loading leads...</p>
            ) : leads.length === 0 ? (
                <p className="text-gray-600">No leads available for {lead}.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {leads.map((lead, index) => (
                        <LeadsContainerView key={index} lead={lead} />
                    ))}
                </div>
            )}
        </div>
    );
};

// Tabs with icons
const items: TabsProps["items"] = leadsType.map((lead, index) => ({
    key: (index + 1).toString(),
    label: (
        <span className="flex items-center gap-2">
            {leadIcons[index]} {lead}
        </span>
    ),
    children: lead === "Search" ? <LeadsSearch /> : lead === "Create" ? <LeadCreate /> : <LeadsContainer lead={lead} />,
}));

const LeadsSelector = () => {
    return (
        <div className="px-4 py-2 bg-gray-100 rounded-lg shadow">
            <Tabs defaultActiveKey="3" items={items} onChange={onChange} />
        </div>
    );
};

export default LeadsSelector;

// [============================================================]
// [=========================  Props  ==========================]
// [============================================================]

interface LeadsContainerProps {
    lead: LeadType;
}
export type LeadType = (typeof leadsType)[number];
