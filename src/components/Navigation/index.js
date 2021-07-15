import React, { useState } from "react";
import Sidebar from "../Sidebar";
import PhoneSideMenu from "../SideBarPhone";
import { useWindowSize } from "../../Hook/useWindowSize";

//This is the navigation system that switches, between a mobile version and a
// full desktop version, determined by the breakpoint
const Navigation = () => {
  //is the sidebar open or not?
  const [isOpen, setIsOpen] = useState(false);

  //This toggles the sidebar back and fourth
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //breakpoint
  const breakpoint = 710;
  //Checks the size of the widow dynamically
  const size = useWindowSize();
  return (
    <div>
      {size.width < breakpoint ? (
        <PhoneSideMenu isOpen={isOpen} toggle={toggle} />
      ) : (
        <div style={{ width: "140px", height: "100%" }}>
          <Sidebar />
        </div>
      )}
    </div>
  );
};

export default Navigation;
