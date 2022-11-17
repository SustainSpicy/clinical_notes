import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

function IntakeItem({ children }) {
  return <IntakeItemWrapper>{children}</IntakeItemWrapper>;
}

export default IntakeItem;
const IntakeItemWrapper = styled(Button)`
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
