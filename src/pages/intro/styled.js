/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import theme from "@/styles/theme";

export const Shell = styled.main`
  min-height: 100svh;               /* 모바일 뷰포트 기준 */
  padding: 16px;                     /* 단일 패딩 */
  display: grid;
  place-items: center;
`;

export const Window = styled.section`
  width: min(560px, 100%);           /* 모바일 전체, 태블릿 이상 560px 제한 */
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius};
  background: linear-gradient(#ffffff, ${theme.colors.panel});
  box-shadow: 0 8px 24px ${theme.colors.shadow}40, inset 0 1px 0 #ffffffcc;
`;

export const TitleBar = styled.header`
  padding: 14px 16px;
  border-bottom: 1px solid ${theme.colors.border};
  background: linear-gradient(#f9fafb, #eef1f4);
  border-top-left-radius: ${theme.radius};
  border-top-right-radius: ${theme.radius};
  font-weight: 700;
`;

export const Body = styled.div`
  padding: 16px;
`;
