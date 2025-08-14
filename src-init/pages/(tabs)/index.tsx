// 📌 Example: Using the Tabs Component
// File: DemoTabs.tsx

import { useState } from "react";
import { PageHeader } from "../../components"; // Optional: For page title/header
import Tabs, { TabItem } from "../../components/(reuse)/Tabs"; // Tabs component import

// 1️⃣ Define the IDs your tabs will use
type TabIds = "overview" | "analytics" | "settings" | "help";

const DemoTabs = () => {
    // 2️⃣ Track the currently active tab
    const [activeTab, setActiveTab] = useState<TabIds>("overview");

    // 3️⃣ Create your tab list with `id`, `label`, and `content`
    const tabItems: TabItem<TabIds>[] = [
        {
            id: "overview",
            label: "Overview",
            content: (
                <div className="p-4 bg-white rounded shadow">
                    <h2 className="text-lg font-semibold">Overview</h2>
                    <p>This is the overview section. Add your dashboard summary here.</p>
                </div>
            ),
        },
        {
            id: "analytics",
            label: "Analytics",
            content: (
                <div className="p-4 bg-white rounded shadow">
                    <h2 className="text-lg font-semibold">Analytics</h2>
                    <p>View your charts, stats, and KPIs in this tab.</p>
                </div>
            ),
        },
        {
            id: "settings",
            label: "Settings",
            content: (
                <div className="p-4 bg-white rounded shadow">
                    <h2 className="text-lg font-semibold">Settings</h2>
                    <p>Change your preferences, theme, or notifications here.</p>
                </div>
            ),
        },
        {
            id: "help",
            label: "Help",
            content: (
                <div className="p-4 bg-white rounded shadow">
                    <h2 className="text-lg font-semibold">Help</h2>
                    <p>Find FAQs, support contact, and documentation here.</p>
                </div>
            ),
        },
    ];

    // 4️⃣ Render the component
    return (
        <>
            {/* Page header */}
            <PageHeader title="Demo Tabs Component" />

            {/* Tabs */}
            <div className="p-4">
                <Tabs
                    tabs={tabItems}           // Array of tab items
                    activeTab={activeTab}     // Currently active tab ID
                    onChange={setActiveTab}   // Function to handle tab change
                />

                <TabsGuide />
            </div>
        </>
    );
};

export default DemoTabs;

const TabsGuide = () => {
    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">📚 How to Use Tabs Component</h2>
            <ol className="list-decimal list-inside space-y-1">
                <li>📂 Place the <code>Tabs.tsx</code> file inside <code>src/components/(reuse)/Tabs.tsx</code>.</li>
                <li>🛠 Define a type for your tab IDs: <code>type MyTabIds = "tab1" | "tab2" | "tab3";</code></li>
                <li>🎯 Create an array of <code>TabItem&lt;MyTabIds&gt;</code> objects with <b>id</b>, <b>label</b>, and <b>content</b>.</li>
                <li>⚡ Keep track of active tab with: <code>const [activeTab, setActiveTab] = useState&lt;MyTabIds&gt;("tab1");</code></li>
                <li>🖼 Render Tabs:
                    <pre className="bg-gray-100 p-2 rounded mt-1">
                        {`<Tabs 
  tabs={tabItems} 
  activeTab={activeTab} 
  onChange={setActiveTab} 
/>`}
                    </pre>
                </li>
                <li>🚀 Use in Dashboard, Booking pages, or Settings page.</li>
            </ol>
        </div>
    );
};

