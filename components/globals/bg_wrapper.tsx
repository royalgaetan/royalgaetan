import React from "react";

const BgWrapper = ({ children, customClassName, id, ref }: any) => {
  return (
    <div
      id={id}
      ref={ref}
      className={`${customClassName} w-full dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_60%_35%_at_50%_-20%,rgba(100,116,139,0.7),rgba(255,255,255,0))] bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[length:16px_16px] dark:bg-[length:0%_0%]`}
    >
      {children}
    </div>
  );
};

export default BgWrapper;
