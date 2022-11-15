import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import styled from "styled-components";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
function TabHeader({
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
        {tabData.slice(continuation).map((item) => {
          return (
            <TabComponentListHeader
              key={item.id}
              value={item.id}
              {...passProps(item)}
              onClick={(e) => handleTabChange(e, item.id)}
            />
          );
        })}
      </StyledSelect>
    </>
  );
}

export default TabHeader;
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
const TabComponentListHeader = styled(Tab)`
  display: flex !important;
  min-width: 50px !important;
  /* padding: 12px 10px !important; */
  color: ${(props) =>
    props.color || props.theme.generalColors.fadedgray} !important;
  font-size: ${({ theme }) => theme.fontSize.xsmall} !important;
`;
