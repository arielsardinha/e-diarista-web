import React from "react";
import {
  FooterStyle,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./FooterStyle";
import { Typography, Box } from "@material-ui/core";

const Footer = () => {
  return (
    <FooterStyle>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem Somos</FooterTitle>
          <Typography variant={"body2"} sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            nesciunt adipisci alias a consequuntur numquam corrupti aliquid
            porro animi at ipsa, fugiat maxime repudiandae iure aliquam!
            Doloribus, facilis. Quasi, odio.
          </Typography>
        </Box>
        <div>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"img/logos/app-store.png"} alt={"App Store"} />
              </a>
            </li>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"img/logos/google-play.png"} alt={"Google Play"} />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyle>
  );
};
export default Footer;
