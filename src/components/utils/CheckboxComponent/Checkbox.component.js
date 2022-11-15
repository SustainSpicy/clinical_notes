import React from "react";
import styled from "styled-components";
import { BiCheck } from "react-icons/bi";
const CheckboxContainer = styled.div`
  display: flex;
  gap: 15px;
  color: initial;
  & > span {
    text-align: left;
    font-size: ${({ theme }) => theme.fontSize.xsmall};
    color: ${({ theme }) => theme.generalColors.fadedgray};
    text-transform: capitalize;
  }
`;

const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  background: ${(props) =>
    props.checked ? props.theme.generalColors.success : "none"};
  border: ${({ theme }) => `2px solid ${theme.generalColors.dark_gray}`};
  border-radius: ${(props) => props.radius};
  transition: all 100ms;
`;

const Checkbox = ({ onClick, text, radius, checked, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox {...props} type="checkbox" checked={checked} readOnly />
    <StyledCheckbox checked={checked} radius={radius}>
      <BiCheck color={"white"}></BiCheck>
    </StyledCheckbox>
    <span>{text}</span>
  </CheckboxContainer>
);

export default Checkbox;
