import React from "react";
import Image from "./image.png";
function ContactCard(props) {
  return (
    <>
      <div className={"flex flex-col gap-4 bg-[#7D8B9310] p-8 rounded-2xl"}>
        <div className={"gap-4 flex flex-col"}>
          <span className={"text-[#7D8B93] text-center font-bold text-lg"}>
            CARD LIBRARY 01
          </span>
          <img className={"h-[180px] w-auto"} src={Image} alt="" />
        </div>
        <div className={"flex flex-col gap-8"}>
          <span className={"p-3 text-center text-[20px]"}>
            Lorem ipsum dolor sit amet consectetur. Vestibulum elit feugiat et
            id turpis enim dui.
          </span>
          <button
            className={
              "bg-[#0984E3] text-white w-fit self-center py-3 px-9 rounded-md"
            }
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}

export default ContactCard;
