import styled from "styled-components";
import Button from "@mui/material/Button";

export const IconDiv = styled(Button)`
  width: ${(props) => props.width || "40px"} !important;
  height: ${(props) => props.height || "40px"} !important;
  background-color: ${({ theme }) => theme.generalColors.gray} !important;
  color: ${({ theme }) => theme.generalColors.textDefaultColor} !important;
  border-radius: ${(props) => props.radius || ""} !important;
  /* padding: 0.5rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-width: 14px !important;
  & > .redDot {
    position: absolute;
    right: 10px;
    top: 8px;
    background-color: ${({ theme }) => theme.generalColors.red};
    border-radius: 100%;
    width: 0.3em;
    height: 0.3em;
  }
  & .MuiBadge-badge {
    top: -2px !important;
    right: -2px !important;
    min-width: 5px !important;
    width: 5px !important;
    height: 5px !important;
    background-color: ${({ theme }) => theme.generalColors.red} !important;
  }
`;
