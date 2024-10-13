import IconCopy from "@/assets/IconCopy";
import IconDownload from "@/assets/IconDownload";
import SegmentedControl, { ActionIcon } from "@/shared/UIs";

import React, { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const HeaderSelection = () => {
  const [selectionOption, setSelectionOption] = useState("Sequential");
  return (
    <div className="p-4 border-[#202020] border-b-[2px] flex justify-between items-center">
      <div className="flex gap-2 items-center text-[#E4E4E4]">
        <span className="">Front-End Task</span>
        <BiSolidEdit />
      </div>
      <div className="flex">
        <SegmentedControl
          options={["Stream", "Parallel", "Sequential"]}
          onChange={setSelectionOption}
          selectedOption={selectionOption}
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 cursor-pointer justify-center w-fit px-2 h-10 bg-[#202020] rounded-[6px] text-white">
          <span className="text-[13px] font-[500]">ChatGPT 4o</span>
          <IoMdArrowDropdown />
        </div>
        <ActionIcon icon={<IconCopy />} />
        <ActionIcon icon={<IconDownload />} />
        <ActionIcon icon={<FaShare color="#E4E4E4" />} />
      </div>
    </div>
  );
};

export default HeaderSelection;