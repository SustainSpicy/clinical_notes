import styled from "styled-components";

function TabComponentPanel({ children, value, index, tabDisplay, ...other }) {
  return (
    <TabPanelWrapper
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      display={tabDisplay}
      {...other}
    >
      {value === index && children}
    </TabPanelWrapper>
  );
}

export default TabComponentPanel;

const TabPanelWrapper = styled.div`
  position: relative;

  overflow-y: scroll;
  overflow-x: hidden;
  display: ${(props) => props.display};
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
`;
