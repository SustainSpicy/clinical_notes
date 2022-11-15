import styled from "styled-components";

export const NavigatorWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;
export const NavigatorButtons = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 15px;
  color: ${({ theme }) => theme.generalColors.linkColor};
`;
export const NavigatorOption = styled.div`
  color: ${({ theme }) => theme.generalColors.fadedgray};
`;
