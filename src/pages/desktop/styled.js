import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import theme from "@/styles/theme";

// 추가: 둥둥 떠있는 애니메이션
const floatY = keyframes`
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-4px); }
  100% { transform: translateY(0); }
`;

export const Desktop = styled.main`
  min-height: 100svh;
  padding: 12px;
  display: grid;
  place-items: center;
`;

export const Window = styled.section`
  width: min(620px, 100%);
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius};
  background: linear-gradient(#fff, ${theme.colors.panel});
`;

export const TitleBar = styled.header`
  padding: 12px 14px;
  border-bottom: 1px solid ${theme.colors.border};
  background: linear-gradient(#f9fafb, #eef1f4);
  border-top-left-radius: ${theme.radius};
  border-top-right-radius: ${theme.radius};
  font-weight: 700;
`;

export const StatusRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  font-size: 12px;
  color: #333;
  border-bottom: 1px solid ${theme.colors.border};
`;

export const Body = styled.div`
  padding: 16px;
`;

export const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  gap: 16px;
`;

export const IconButton = styled.button`
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 12px;
  border: 1px solid transparent;
  border-radius: 12px;
  background: linear-gradient(#ffffff, #f6f7f9);
  cursor: ${(p) => (p.$disabled ? "default" : "pointer")};
  pointer-events: ${(p) => (p.$disabled ? "none" : "auto")};
  opacity: ${(p) => (p.$disabled ? 0.6 : 1)};
  transform: ${(p) => (p.$disabled ? "scale(0.92)" : "none")};
  filter: ${(p) => (p.$disabled ? "grayscale(20%)" : "none")};

  /* 여기서만 둥둥 떠있게 */
  animation: ${(p) => (p.$float ? `${floatY} 2.6s ease-in-out infinite` : "none")};
  will-change: transform;

  &:hover {
    border-color: ${(p) => (p.$disabled ? "transparent" : theme.colors.border)};
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const IconGlyph = styled.span`
  font-size: ${(p) => (p.$small ? "26px" : "34px")};
  line-height: 1;
`;

export const IconLabel = styled.span`
  font-family: "ChicagoFLF", "Lucida Grande", "Helvetica Neue", Arial, sans-serif;
  font-size: ${(p) => (p.$small ? "12px" : "14px")};
`;
