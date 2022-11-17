import styled from "styled-components";

export const NoteWrapper = styled.section`
  display: grid;
  grid-template-columns: 350px 1fr 300px;
  grid-template-rows: 1fr;
  background-color: ${({ theme }) => theme.header.background};
  overflow-y: hidden;
`;

export const Card = styled.section`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
`;
export const LeftColumn = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  overflow: hidden;

  grid-column: 1/2;
  grid-row: 1/2;
`;

export const CenterColumn = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  gap: 5px;
  overflow: hidden;
  grid-column: 2/3;
  grid-row: 1/2;
  min-width: 500px !important;
  overflow-y: scroll;
  position: relative;
  & > div:nth-child(1) {
    flex: 0.2;
  }
  & > div:nth-child(2) {
    flex: 1;
  }
`;
export const RightColumn = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 5px;
  /* & > div:nth-child(1) {
    border-radius: 2px;
    flex: 0.2;
  } */
  & > div:nth-child(2) {
    /* background-color: antiquewhite; */
    border-radius: 5px;
    flex: 1;
  }
`;
