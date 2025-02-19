import { Button } from "antd";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { Lead } from "../../types/leads";
import { leadsType } from "./LeadsSelector";

interface LCP {
    lead: Lead;
}

const LeadsContainerView = ({ lead }: LCP) => {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState("");

    return (
        <div
            className="relative bg-white p-5 rounded-lg shadow-lg transition-all duration-300 overflow-hidden border hover:shadow-xl"
            onMouseEnter={() => setIsOverlayVisible(true)}
            onMouseLeave={() => {
                if (!isDropdownOpen) setIsOverlayVisible(false);
            }}
        >
            {/* Main Card Content */}
            <div className="relative z-10">
                <h3 className="text-lg font-semibold text-blue-800">{lead.name}</h3>
                <p className="text-gray-600 flex items-center gap-2">
                    <IoMailOutline className="text-blue-600" /> {lead.email}
                </p>
                <p className="text-gray-600 flex items-center gap-2">📍 {lead.destination}</p>
                <p className="text-gray-600 flex items-center gap-2">
                    <IoCallOutline className="text-blue-600" /> {lead.phone}
                </p>
                <p className="text-gray-600">🗓 Dates: {lead.date.join(", ")}</p>
            </div>

            {/* Overlay with Buttons */}
            {isOverlayVisible && (
                <div
                    className="absolute inset-0 bg-black/20 flex flex-col items-end p-4 gap-2 z-10 transition-opacity duration-200"
                    onMouseEnter={() => setIsOverlayVisible(true)}
                    onMouseLeave={() => {
                        if (!isDropdownOpen) setIsOverlayVisible(false);
                    }}
                >
                    <Button className="bg-blue-800 hover:bg-blue-900 text-white" icon={<IoMailOutline />} />
                    <Button className="bg-blue-800 hover:bg-blue-900 text-white" icon={<IoCallOutline />} />
                    <Button
                        className="bg-blue-800 hover:bg-blue-900 text-white"
                        icon={isDropdownOpen ? <IoIosArrowBack /> : <IoIosArrowForward />}
                        onClick={() => {
                            setIsDropdownOpen(!isDropdownOpen);
                            setIsOverlayVisible(true);
                        }}
                    />
                </div>
            )}

            {/* Dropdown Sliding from Left with 100px Right Gap */}
            {isDropdownOpen && (
                <div
                    className="absolute top-0 left-0 w-[calc(100%-60px)] h-full bg-white shadow-lg rounded-lg p-4 z-20 border 
                    transition-transform duration-300 right-[100px]"
                >
                    <label className="text-sm font-semibold text-gray-700">Lead Status</label>
                    <select
                        className="w-full mt-1 p-2 border rounded-lg"
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                        {leadsType.map((l, i) => (
                            <option key={i} value={l}>
                                {l}
                            </option>
                        ))}
                    </select>
                    <div className="mt-4 flex justify-end">
                        <button
                            className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition duration-200"
                            onClick={() => setIsDropdownOpen(false)}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LeadsContainerView;
