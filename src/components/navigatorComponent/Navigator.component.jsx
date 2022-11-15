import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { AiFillInfoCircle } from "react-icons/ai";

import Tooltip from "@mui/material/Tooltip";
import {
  NavigatorButtons,
  NavigatorOption,
  NavigatorWrapper,
} from "./navigator.styled";

function Navigator() {
  return (
    <NavigatorWrapper>
      <NavigatorButtons to={"/"}>
        <IoIosArrowRoundBack />
        <span>Back to Clinical Notes List</span>
      </NavigatorButtons>

      <Tooltip title="Info" placement="bottom">
        <NavigatorOption>
          <AiFillInfoCircle />
        </NavigatorOption>
      </Tooltip>
    </NavigatorWrapper>
  );
}

export default Navigator;
