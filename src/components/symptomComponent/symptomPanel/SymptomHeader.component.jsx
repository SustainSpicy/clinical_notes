import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import styled, { css } from "styled-components";
import Select from "@mui/material/Select";

function SymptomHeader({
  tabData,
  continuation,
  passProps,
  handleTabChange,
  indicator = "100px",
}) {
  const [selected, setSelected] = useState("");
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <>
      <StyledSelect
        displayEmpty
        value={selected}
        onChange={handleChange}
        variant="outlined"
        renderValue={() =>
          selected ? tabData[selected].title : <span>More</span>
        }
      >
        <FlexDiv>
          {tabData.slice(continuation).map((item) => {
            return (
              <SymptomListHeader
                key={item.id}
                value={item.id}
                {...passProps(item)}
                onClick={(e) => handleTabChange(e, item.id)}
              />
            );
          })}
        </FlexDiv>
      </StyledSelect>
    </>
  );
}

export default SymptomHeader;
const absoluteTab = css`
  position: absolute !important;
  visibility: hidden !important;
  right: -10 !important;
  width: 105px !important;
`;
const StyledSelect = styled(Select)`
  min-width: 25px !important;
  color: ${(props) =>
    props.color || props.theme.generalColors.fadedgray} !important;

  & .MuiOutlinedInput-notchedOutline {
    border-top: none !important;
    border-left: none !important;
    border-right: none !important;
    border-radius: 0;
    padding: 6px 14px !important;
  }
`;

const FlexDiv = styled.div`
  display: flex !important;
  flex-direction: column !important;
`;
const SymptomListHeader = styled(Tab)`
  min-width: 50px !important;
  visibility: ${(props) => props.visibility}!important;
  ${(props) => props.position && absoluteTab};
  /* color: ${(props) =>
    props.color || props.theme.generalColors.fadedgray} !important; */
  font-size: ${({ theme }) => theme.fontSize.xsmall} !important;
`;
