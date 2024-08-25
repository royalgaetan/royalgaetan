import { Badge } from "@/components/ui/badge";
import { SkillType } from "@/utils/type";
import React from "react";

const ExperienceBadge = (toolsUsed: SkillType) => {
  return (
    <Badge className="text-xs cursor-pointer bg-[#F31260]/70 font-light mr-2 text-white hover:opacity-60">
      {toolsUsed.title}
    </Badge>
  );
};

export default ExperienceBadge;
