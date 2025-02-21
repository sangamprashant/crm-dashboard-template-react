import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface SideLinksProps {
    title: string;
    link?: string;
    icon?: ReactNode;
    className?: string
    onPress?: () => void
}

const SideLinks = ({ title, link, icon, onPress, className = "text-gray-300 hover:text-white" }: SideLinksProps) => {
    return (
        <>
            <Link
                className={`flex flex-row items-center justify-start rounded-md h-12 focus:outline-none pr-3.5 lg:pr-6 font-semibold cursor-pointer my-1 min-h-[48px] ${className}`}
                to={link||""}
                onClick={onPress}
            >
                <span className="inline-flex justify-center items-center ml-3.5">
                    {icon}
                </span>
                <span className="ml-2 text-sm tracking-wide truncate capitalize">{title}</span>
            </Link>

        </>
    )
}

export default SideLinks