/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import theme from "../../styles/theme";

export const Field = styled.div`
  display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px;
`;

export const Label = styled.label`
  font-size: 14px;
`;

const base = `
  width: 100%;
  padding: 12px 14px;
  border-radius: ${theme.radius};
  border: 1px solid ${theme.colors.border};
  background: linear-gradient(#fff, ${theme.colors.panel});
  outline: none;
  font-size: 16px;

`;

export const TextInput = styled.input`${base}`;
export const Select = styled.select`${base}
`;
export const TextArea = styled.textarea`
  ${base}
  min-height: 96px;
  resize: vertical;
`;

export const PrimaryButton = styled.button`
  width: 100%;
  padding: 14px 16px;
  border-radius: ${theme.radius};
  border: 1px solid ${theme.colors.border};
  background: linear-gradient(${theme.colors.panel}, #e9ecef);
  font-weight: 600;
  cursor: pointer;
  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 0 ${theme.colors.shadow}55;
  }
  &:disabled {
    opacity: .6; cursor: not-allowed;
  }
`;
