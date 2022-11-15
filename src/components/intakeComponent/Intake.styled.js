import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";

export const IntakeNoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const IntakeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const IntakeViewBtn = styled(Button)`
  margin: 15px 0 !important;
  padding: 10px !important;
  width: 100%;
  border-radius: 5px !important;
  background-color: ${({ theme }) => theme.generalColors.fadedBlue} !important;

  & svg path {
    stroke: ${({ theme }) => theme.generalColors.white};
  }
`;
export const IntakeList = styled(Tabs)`
  border-bottom: 1px solid ${({ theme }) => theme.generalColors.dark_blue};
  & .MuiTabs-flexContainer {
    justify-content: space-between;
    & #simple-tab-2 {
      color: ${({ theme }) => theme.generalColors.red};
    }
  }
`;
export const IntakeListHeader = styled(Tab)`
  min-width: 50px !important;
  padding: 12px 5px !important;
  font-weight: 400 !important; ;
`;

export const HeaderIcon = styled.div`
  display: flex;
  gap: 5px;
`;
export const ModalInner = styled.div`
  min-width: 200px;
  min-height: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const ModalTilte = styled.div`
  padding: 20px;
`;
