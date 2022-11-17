import styled, { css } from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export const SectionHead = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;
export const SymptomsWrapper = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
`;
export const absoluteTab = css`
  position: absolute !important;
  visibility: hidden !important;
  right: -10 !important;
  width: 105px !important;
`;
export const SymptomList = styled(Tabs)`
  border-bottom: 1px solid ${({ theme }) => theme.generalColors.dark_blue};
  & .MuiTabs-flexContainer {
    justify-content: space-between;
    & #simple-tab-2 {
      /* color: ${({ theme }) => theme.generalColors.red}; */
    }
  }
`;
export const SymptomListHeader = styled(Tab)`
  min-width: 50px !important;
  visibility: ${(props) => props.visibility}!important;
  ${(props) => props.position && absoluteTab};
  /* color: ${(props) =>
    props.color || props.theme.generalColors.fadedgray} !important; */
  font-size: ${({ theme }) => theme.fontSize.xsmall} !important;
`;

export const TextArea = styled.textarea`
  background-color: rgb(229 229 229);
  width: 100%;
  height: ${(props) => props.height || "100px"};
  padding: 12px 20px;
  margin: 12px 0;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: none;
  box-shadow: ${({ theme }) => theme.generalColors.borderColor};
  outline: none;
`;

export const AlertWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
