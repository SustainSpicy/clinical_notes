import React from "react";
import styled from "styled-components";
import Navigator from "../../navigatorComponent/Navigator.component";
import { useOutletContext } from "react-router-dom";

function PageTitle() {
  const { title, description } = useOutletContext();
  return (
    <>
      <Navigator />
      <PageTitleWrapper>
        <PageTittle>{title}</PageTittle>
        <PageDescription>{description} </PageDescription>
      </PageTitleWrapper>
    </>
  );
}

export default PageTitle;

export const PageTitleWrapper = styled.section`
  & > * {
    margin: 0.5rem 0;
  }
`;
export const PageTittle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.header};
`;
export const PageDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  color: ${({ theme }) => theme.generalColors.fadedgray};
`;
