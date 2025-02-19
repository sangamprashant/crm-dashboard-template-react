"use client";

import React from "react";
import {
    HiOutlineChartBar, HiOutlineClipboardList, HiOutlineMail,
    HiOutlineUsers, HiOutlineViewGrid, HiX
} from "react-icons/hi";
import { TbLogout2 } from "react-icons/tb";
import { PiUserCircleGearLight } from "react-icons/pi";

import { Link } from "react-router-dom";
import { useAuth } from "../providers/AuthenticationContext";
import { useSidebar } from "../providers/SidebarContext";
import Logo from "./sidebar/Logo";
import SideLinks from "./sidebar/SideLinks";
import Title from "./sidebar/Title";
import Topbar from "./sidebar/Topbar";

interface SideBarProps {
    children: React.ReactNode;
}

// Sidebar Links
const linksList = [
    { title: "Dashboard", link: "/dashboard", icon: <HiOutlineViewGrid size={22} /> },
    { title: "Mail", link: "/mails", icon: <HiOutlineMail size={22} /> },
    { title: "Leads", link: "/leads", icon: <HiOutlineUsers size={22} /> },
    { title: "Bookings", link: "/bookings", icon: <HiOutlineClipboardList size={22} /> },
    { title: "Analytics", link: "/analytics", icon: <HiOutlineChartBar size={22} /> },
];

const Dashboard = ({ children }: SideBarProps) => {
    const { isOpen, closeSidebar } = useSidebar();
    const { logout } = useAuth();

    return (
        <div className="flex h-screen w-full">
            {/* Sidebar */}
            <div
                className={`absolute md:relative bg-white dark:bg-gray-900 shadow-md border-r border-gray-700 transition-all duration-300 
                ${isOpen ? "w-64 translate-x-0" : "-translate-x-64"} md:w-64 md:translate-x-0 
                h-screen z-50 flex flex-col`}
            >
                <div className="flex items-center justify-between p-4">
                    <Link to="/" className="flex items-center gap-2">
                        <Logo />
                        <span className="text-xl font-semibold hidden md:block text-white">Travel</span>
                    </Link>
                    <button onClick={() => closeSidebar()} className="md:hidden text-gray-700 dark:text-gray-300">
                        <HiX size={24} />
                    </button>
                </div>
                {/* Sidebar Navigation Links */}
                <nav className="flex flex-col px-2 flex-1 overflow-y-auto max-h-[calc(100vh-120px)]">
                    <Title title="Menu" />
                    {linksList.map((link, index) => (
                        <SideLinks key={index} {...link} />
                    ))}
                </nav>
                {/* Push items to bottom */}
                <nav className="flex flex-col px-2 mt-auto">
                    <SideLinks key="setting" title="Settings" link="/settings" icon={<PiUserCircleGearLight />} className="text-blue-400 hover:text-blue-600" />
                    <SideLinks
                        key="logout"
                        title="Logout"
                        link="/"
                        icon={<TbLogout2 />}
                        className="text-red-500 hover:text-red-700"
                        onPress={logout}
                    />
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-gray-100 overflow-auto transition-all duration-300 w-full">
                <Topbar />
                {children}
            </div>
        </div>
    );
};

export default Dashboard;
