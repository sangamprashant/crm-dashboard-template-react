import React from "react";

interface PageHeaderProps {
  title: string;
  icon?: React.ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <div
      className="relative w-full h-48 bg-blue-950 bg-cover bg-center flex items-center  rounded-b-xl overflow-hidden shadow-lg"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      {/* Overlay for better visibility */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Logo inside the banner */}
      <div className="relative z-10 text-white p-4">

        <h1 className="text-5xl flex items-center gap-2">
          {props.icon}
          {props.title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;
