import React from "react";
import NavButton from "./NavButton";

const SideBar = props => (
  <div className="NavBar">
    {props.navButtons.map(button => (
      <NavButton
        key={button.path}
        path={button.path}
        label={button.label}
      />
    ))}
  </div>
);

export default SideBar;