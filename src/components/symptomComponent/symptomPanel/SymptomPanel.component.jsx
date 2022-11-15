import styled from "styled-components";

function SyptomPanel({ children, value, index, ...other }) {
  return (
    <SymptomPanelWrapper
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </SymptomPanelWrapper>
  );
}

export default SyptomPanel;

const SymptomPanelWrapper = styled.div`
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  height: 200px;
  display: ${(props) => (props.hidden ? "none" : "")};
`;
