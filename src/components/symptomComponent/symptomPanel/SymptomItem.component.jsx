import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
function SymptomItem({ children, onClick }) {
  return <SymptomItemWrapper onClick={onClick}>{children}</SymptomItemWrapper>;
}

export default SymptomItem;
const SymptomItemWrapper = styled(Button)`
  margin-top: 8px !important;
  position: relative;
  padding: 10px 5px !important;
  align-items: center;
  justify-content: initial !important;
  gap: 12px;
  min-height: 40px;
  height: fit-content;
  width: 32%;
  border-radius: 5px;

  & > span {
    color: ${({ theme }) => theme.generalColors.textDefaultColor};
  }
`;
