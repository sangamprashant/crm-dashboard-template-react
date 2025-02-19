import { Avatar, Badge } from 'antd';
import { BiUser } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { useSidebar } from "../../providers/SidebarContext";

const Topbar = () => {
    const { toggleSidebar } = useSidebar()
    return (
        <div className="sticky top-0 w-full bg-white shadow-md dark:bg-gray-900 dark:text-gray-200 px-4 py-4 flex items-center justify-between z-40">
            <button onClick={() => toggleSidebar()} className="md:hidden text-gray-700 dark:text-gray-300">
                <HiMenu size={24} />
            </button>
            <h1 className="text-lg font-semibold">Dashboard</h1>
            <Badge count={10} >
                <Avatar shape="circle" icon={<BiUser />} className="bg-white" />
            </Badge>
        </div>
    );
};

export default Topbar;
