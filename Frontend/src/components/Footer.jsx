import React, { memo } from "react";
import NextButton from "./NextButton";
import Timer from "./Timer";

function Footer() {
  return (
    <footer className="w-full flex justify-between items-center py-2 mt-auto shrink-0">
      <div className="flex items-center">
        <Timer />
      </div>

      <div className="flex items-center">
        <NextButton />
      </div>
    </footer>
  );
}

export default memo(Footer);
