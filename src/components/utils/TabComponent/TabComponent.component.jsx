import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import styled, { css } from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabComponentPanel from "./TabComponentPanel.component";
import TabComponentItem from "./TabComponentItem.component";
import { StyledCheckbox } from "../../styles/utils/input.styled";
import TabHeader from "./TabComponentHeader";
import useWindowDimensions from "../../../hooks/useWindowDimention";

function TabComponent({
  tabData,
  listTitle,
  clickFunction,
  tabDisplay,
  inputRadius,
  responsive,
  children,
}) {
  const [tab, setTab] = useState(0);
  const [tabCollapse, setTabCollapse] = useState(false);
  const TabHeadRef = useRef();
  const { windoWwidth } = useWindowDimensions();
  const handleTabChange = (e, newTab) => {
    e.preventDefault();
    setTab(newTab);
  };

  useLayoutEffect(() => {
    if (TabHeadRef.current) {
      let tabPanelWidth =
        TabHeadRef.current.childNodes[0].childNodes[0].clientWidth;
      let tabsHeader =
        TabHeadRef.current.childNodes[0].childNodes[0].childNodes;

      let totalTabsWidth = 0;
      let allowedIndex = 0;
      if (responsive) {
        Object.entries(tabsHeader).forEach((item, index) => {
          totalTabsWidth += item[1].clientWidth;
          let remainder = tabPanelWidth - totalTabsWidth;
          if (remainder >= 200) {
            allowedIndex = index;
          }
        });
        setTabCollapse(allowedIndex);
      } else {
        allowedIndex = tabsHeader.length;
        setTabCollapse(allowedIndex);
      }
    }
  }, [TabHeadRef, windoWwidth]);

  function passProps(item) {
    return {
      id: `simple-tab-${item.id}`,
      label: `${item.title}(${item.func.length})`,
      "aria-controls": `tabpanel-${item.id}`,
      style: { color: "initial" },
    };
  }

  return (
    <>
      <TabComponentList
        value={tab}
        onChange={handleTabChange}
        aria-label={listTitle}
        ref={TabHeadRef}
      >
        {tabData.map((item, index, arr) => {
          let limit = tabCollapse;
          let continuation = limit + 1;
          if (index <= limit) {
            return (
              <TabComponentListHeader key={item.id} {...passProps(item)} />
            );
          } else if (index > continuation) {
            return (
              <TabComponentListHeader
                key={item.id}
                {...passProps(item)}
                position={"absolute"}
              />
            );
          } else if (index === continuation) {
            let metadata = {
              tabData: arr,
              continuation,
              passProps,
              handleTabChange,
            };

            return <TabHeader key={item.id} {...metadata} />;
          }
        })}
      </TabComponentList>
      {tabData.map((item) => {
        return (
          <TabComponentPanel
            key={item.id}
            value={tab}
            index={item.id}
            {...{ tabDisplay }}
          >
            {item.func.length > 0 ? (
              item.func.map((itemSelected) => {
                return (
                  <TabComponentItem
                    key={itemSelected.id}
                    id={itemSelected.id}
                    editable={item.editable}
                    {...itemSelected}
                  >
                    <StyledCheckbox
                      onClick={() => clickFunction(itemSelected.id)}
                      id={itemSelected.id}
                      type="checkbox"
                      radius={inputRadius}
                      defaultChecked={itemSelected.checked}
                      title={itemSelected.title}
                    />
                  </TabComponentItem>
                );
              })
            ) : (
              <TabComponentItem>No Data</TabComponentItem>
            )}
          </TabComponentPanel>
        );
      })}
    </>
  );
}

export default TabComponent;
const absoluteTab = css`
  position: absolute !important;
  visibility: hidden !important;
  right: -10 !important;
  width: 105px !important;
`;
const TabComponentList = styled(Tabs)`
  border-bottom: 1px solid ${({ theme }) => theme.generalColors.dark_blue};
  & .MuiTabs-flexContainer {
    justify-content: space-between;
    & #simple-tab-2 {
      /* color: ${({ theme }) => theme.generalColors.red}; */
    }
  }
`;
const TabComponentListHeader = styled(Tab)`
  min-width: 50px !important;
  visibility: ${(props) => props.visibility}!important;
  ${(props) => props.position && absoluteTab};
  color: ${(props) =>
    props.color || props.theme.generalColors.fadedgray} !important;
  font-size: ${({ theme }) => theme.fontSize.xsmall} !important;
`;
