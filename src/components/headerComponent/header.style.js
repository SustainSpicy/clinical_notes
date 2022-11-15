import styled from "styled-components";
import Button from "@mui/material/Button";
export const Container = styled.section`
  width: 100%;
  /* max-width: ${({ theme }) => theme.resolution.tablet}; */
  min-width: ${({ theme }) => theme.resolution.mobileL};
  margin: 0 auto;
  padding: 0;
`;

export const HeaderWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.header.background};
  padding: 1rem;
`;
export const LeftHeaderColumn = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled.h2``;

export const RightHeaderColumn = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const ImageDiv = styled.div`
  width: ${(props) => props.width || "40px"};
  height: ${(props) => props.height || "40px"};
  background-color: ${({ theme }) => theme.generalColors.dark_blue};
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

export const HeaderProfile = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: flex-end !important;
  cursor: pointer;
  color: #3d3d3d !important;
  border-radius: 25px;
  padding: 2px 10px;
  min-width: 200px !important;
  height: 40px !important;
  gap: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.generalColors.gray} !important;
  }
  & > .greeting {
    opacity: 0.5;
  }
  & > .name {
    font-weight: 700;
  }
  /* & .dropDown {
    cursor: pointer;
  } */
`;
