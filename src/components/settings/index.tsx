import { useState } from "react";
import ResetEmail from "./ResetEmail";
import ResetPassword from "./ResetPassword";
import Tabs, { TabItem } from "../(reuse)/Tabs";

type TabType = "email" | "password";

const SettingComponent = () => {
  const [activeTab, setActiveTab] = useState<TabType>("email");

  const tabList: TabItem<TabType>[] = [
    { id: "email", label: "Reset Email", content: <ResetEmail /> },
    { id: "password", label: "Reset Password", content: <ResetPassword /> },
  ];

  return (
    <div className="p-4 rounded shadow">
      <Tabs
        tabs={tabList}
        activeTab={activeTab}
        onChange={setActiveTab}
      />
    </div>
  );
};

export default SettingComponent;
