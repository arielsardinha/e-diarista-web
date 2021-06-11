import React from "react";
import { HeaderAppBar, HeaderLogo } from "./HeaderStyle";
import { Toolbar, Container } from "@material-ui/core";

const Header: React.FC = () => {
  return (
    <HeaderAppBar position={"sticky"}>
      <Toolbar component={Container}>
        <HeaderLogo src={"img/logos/logo.svg"} alt={"e-diarista"} />
      </Toolbar>
    </HeaderAppBar>
  );
};
export default Header;
