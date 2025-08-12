import { ReactNode } from "react";

export interface TabItem<T extends string> {
  id: T;
  label: string;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  tabs: TabItem<T>[];
  activeTab: T;
  onChange: (id: T) => void;
}

const Tabs = <T extends string>({
  tabs,
  activeTab,
  onChange,
}: TabsProps<T>) => {
  return (
    <>
      <div className="relative border-b border-gray-200 mb-4 overflow-x-auto scrollbar-hide">
        <div className="flex min-w-max space-x-4 px-2 sm:px-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`whitespace-nowrap pb-2 px-4 font-medium transition-colors duration-200 
                ${
                  activeTab === tab.id
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-600 hover:text-gray-800"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="mt-4">{tabs.find((tab) => tab.id === activeTab)?.content}</div>
    </>
  );
};

export default Tabs;
