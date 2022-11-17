import styled from "styled-components";
import Button from "@mui/material/Button";

export const StyledCheckbox = styled.input`
  visibility: hidden;
  width: 100%;
  height: 25px;
  position: relative;

  &::before {
    content: "";
    visibility: visible;
    background: ${({ theme }) => theme.generalColors.white};
    border: ${({ theme }) => `2px solid ${theme.generalColors.dark_gray}`};
    border-radius: ${(props) => (props.radius === "round" ? "50%" : "5px")};
    width: 12px;
    height: 12px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:after {
    content: "${(props) => props.title || ""}";
    visibility: visible;
    position: absolute;
    left: 36px;
    top: 4px;
    /* display: flex; */
    color: ${({ theme }) => theme.generalColors.textDefaultColor};
    font-size: 1.2em;
  }
  &:checked {
    visibility: hidden;
    &::before {
      content: "c";
      border: transparent;
      width: 15px;
      height: 15px;
      visibility: visible;
      font-family: "Font Awesome";
      background: ${({ theme }) => theme.generalColors.success};
      color: ${({ theme }) => theme.generalColors.white};
    }
  }
`;

export const StyledPrimaryBtn = styled(Button)`
  margin: 15px 0 !important;
  padding: 5px 10px !important;
  margin: 0 !important;
  text-transform: capitalize;
  border-radius: 5px !important;
  background-color: ${({ theme }) => theme.generalColors.fadedBlue} !important;
  color: ${({ theme }) => theme.generalColors.white} !important;
  position: relative;
  & svg path {
    stroke: ${({ theme }) => theme.generalColors.white};
  }
  &:disabled {
    pointer-events: initial !important;
    cursor: not-allowed !important;
  }
`;

export const StyledTransparentBtn = styled(Button)`
  margin: 15px 0 !important;
  padding: 5px 10px !important;
  margin: 0 !important;
  text-transform: capitalize;
  border-radius: 5px !important;
  background-color: ${({ theme }) => theme.generalColors.white} !important;
  border: ${({ theme }) =>
    `1px solid ${theme.generalColors.fadedBlue}`}!important;
  color: ${({ theme }) => theme.generalColors.fadedBlue} !important;
  & svg path {
    stroke: ${({ theme }) => theme.generalColors.white};
  }
`;
