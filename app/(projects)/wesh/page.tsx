import BgWrapper from "@/components/globals/bg_wrapper";
import FullProjectSection from "@/components/sections/full_project_section";
import { weshProject } from "@/utils/constants";
import React from "react";

const Wesh = () => {
  return (
    <BgWrapper
      customClassName={
        "relative z-10 md:min-h-screen min-h-screen flex flex-1 justify-center items-center"
      }
    >
      {/* Page Content */}
      <FullProjectSection project={weshProject} />
    </BgWrapper>
  );
};

export default Wesh;
