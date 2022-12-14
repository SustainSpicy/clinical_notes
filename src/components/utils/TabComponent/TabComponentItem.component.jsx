import React from "react";
import styled from "styled-components";
import { StyledCheckbox } from "../../styles/utils/input.styled";
import { connect } from "react-redux";
import { updateOneNote } from "../../../redux/Intake/intake.actions";
import Button from "@mui/material/Button";
function TabComponentItem({ children }) {
  return <TabItemWrapper>{children}</TabItemWrapper>;
}

export default TabComponentItem;
const TabItemWrapper = styled(Button)`
  margin-top: 8px !important;
  position: relative;
  padding: 10px 5px !important;
  align-items: center;
  justify-content: initial !important;
  gap: 12px;
  min-height: 40px;

  width: 100%;
  border-radius: 5px;

  & > span {
    color: ${({ theme }) => theme.generalColors.textDefaultColor};
  }
`;
