import styled from "styled-components";
import Button from "@mui/material/Button";

export const ProviderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 15px;
  padding: 2rem 0;
`;
export const ProviderName = styled.h2`
  color: ${({ theme }) => theme.generalColors.textDefaultColor};
  font-size: ${({ theme }) => theme.fontSize.small};
`;
export const ImageDiv = styled.div`
  width: ${(props) => props.width || "40px"};
  height: ${(props) => props.height || "40px"};
  /* background-color: ${({ theme }) => theme.generalColors.dark_blue}; */
  border-radius: ${(props) => props.radius || ""};
  padding: 0.11rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${(props) => props.radius || ""};
    object-position: center center;
  }
`;

export const StyledProviderBtn = styled(Button)`
  margin: 15px 0 !important;
  padding: 5px 10px !important;
  margin: 0 !important;
  text-transform: capitalize;
  border-radius: 5px !important;
  background-color: ${({ theme }) => theme.generalColors.navyBlue} !important;
  color: ${({ theme }) => theme.generalColors.white} !important;
  & svg path {
    stroke: ${({ theme }) => theme.generalColors.white};
  }
`;

export const PatientInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  row-gap: 15px;
  padding: 3rem 1rem 0.5rem 1rem;
  text-align: left;
`;
export const PatientInfoHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.generalColors.navyBlue};
`;
export const PatientInfoItem = styled.div`
  display: flex;
  justify-content: space-between;

  & > span:nth-child(1) {
    font-size: ${({ theme }) => theme.fontSize.xsmall};
    color: ${({ theme }) => theme.generalColors.fadedgray};
  }
  & > span:nth-child(2) {
    font-size: ${({ theme }) => theme.fontSize.xsmall};
    color: ${({ theme }) => theme.generalColors.navyBlue};
    font-weight: bold;
  }
`;
