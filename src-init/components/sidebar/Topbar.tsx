import { Avatar, Badge } from 'antd';
import { BiUser } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { useSidebar } from "../../providers/SidebarContext";
import { ImGithub } from "react-icons/im";
import { Link } from 'react-router-dom';

const Topbar = () => {
    const { toggleSidebar } = useSidebar()
    return (
        <div className="sticky top-0 w-full bg-white shadow-md dark:bg-gray-900 dark:text-gray-200 px-4 py-4 flex items-center justify-between z-40">
            <button onClick={() => toggleSidebar()} className="md:hidden text-gray-700 dark:text-gray-300">
                <HiMenu size={24} />
            </button>
            <h1 className="text-lg font-semibold">Dashboard</h1>
            <div className='flex gap-2'>
                {/* let it be palced so that any one can react to the git repo */}
                <Link to="https://github.com/sangamprashant/crm-dashboard-template-react" target='_blank'>
                    <Badge count={0} className='cursor-pointer'>
                        <Avatar shape="circle" icon={<ImGithub />} className="bg-white" />
                    </Badge>
                </Link>
                <Badge count={10} >
                    <Avatar shape="circle" icon={<BiUser />} className="bg-white" />
                </Badge>
            </div>
        </div>
    );
};

export default Topbar;
