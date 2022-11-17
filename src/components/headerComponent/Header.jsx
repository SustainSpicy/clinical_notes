import React from "react";
import {
  HeaderWrapper,
  RightHeaderColumn,
  LeftHeaderColumn,
  Logo,
  ImageDiv,
  HeaderProfile,
} from "./header.style";
import { FiSearch } from "react-icons/fi";
import { BiChevronDown, BiBell } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import IconButton from "@mui/material/IconButton";
import { IconDiv } from "../styles/utils/icon";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";

function Header({ logoText, greeting, userName, userImg }) {
  return (
    <HeaderWrapper>
      <LeftHeaderColumn>
        <IconButton>
          <GiHamburgerMenu size={"20px"} />
        </IconButton>

        <Logo>{logoText}</Logo>
      </LeftHeaderColumn>
      <RightHeaderColumn>
        <Tooltip title="Search" placement="bottom">
          <IconDiv radius={"5px"}>
            <FiSearch />
          </IconDiv>
        </Tooltip>
        <Tooltip title="Alert" placement="bottom">
          <IconDiv radius={"5px"}>
            {/* <span className="redDot"></span> */}
            <Badge badgeContent={4} color="primary" variant="dot">
              <BiBell />
            </Badge>
          </IconDiv>
        </Tooltip>
        <HeaderProfile>
          <span className="greeting">{greeting},</span>
          <span className="name">{userName}</span>
          <ImageDiv radius="50%" height={"30px"} width={"30px"}>
            <img src={userImg} alt="profile" />
          </ImageDiv>
          {/* <Avatar alt="profile image" src={userImg} /> */}
          <BiChevronDown className="dropDown" size={"20px"} />
        </HeaderProfile>
      </RightHeaderColumn>
    </HeaderWrapper>
  );
}

export default Header;
