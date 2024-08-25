import Link from "next/link";
import React from "react";

type ContactBadge = {
  title: string;
  link: string;
  icon: React.ReactNode;
};

const ContactButton = ({ title, link, icon }: ContactBadge) => {
  return (
    <Link href={link} target="_blank">
      <div className="bg-[#e9e9e9] dark:bg-[#222222] dark:text-white rounded-lg px-3 py-3 cursor-pointer hover:bg-[#F31260]/10 dark:hover:bg-[#F31260]/10">
        <div className="flex flex-1 gap-3 dark:text-white text-[#222222] justify-start items-center text-sm">
          {icon}
          <h3>{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ContactButton;
