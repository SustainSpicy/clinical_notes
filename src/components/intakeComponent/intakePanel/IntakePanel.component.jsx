import styled from "styled-components";

function IntakePanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <IntakePanelWrapper
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </IntakePanelWrapper>
  );
}

export default IntakePanel;

const IntakePanelWrapper = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
`;
