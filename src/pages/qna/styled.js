import styled from "@emotion/styled";

export const Desk = styled.main`
  min-height: 100svh;
  padding: 12px;
  display: grid;
  place-items: center;
`;

export const Sheet = styled.section`
  width: min(680px, 100%);
  background: #fff;
  border: 2px solid #111;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0,0,0,.15);
`;

export const SheetHeader = styled.header`
  padding: 12px 14px 8px;
  border-bottom: 2px solid #111;
  text-align: center;
  font-weight: 700;
  font-family: "ChicagoFLF", "Lucida Grande", Arial, sans-serif;
`;

export const GuideTape = styled.div`
  padding: 8px 12px;
  border-bottom: 1px solid #111;
  background: #f7f7f7;
  font-size: 13px;
  line-height: 1.5;
`;

export const Body = styled.div`
  padding: 14px 14px 6px;
`;

export const Item = styled.div`
  margin: 14px 0;
`;

export const Q = styled.div`
  margin-bottom: 6px;
  font-weight: 600;
  font-family: "ChicagoFLF", "Lucida Grande", Arial, sans-serif;
  /* 밑줄 대신 메모 텍스트처럼 단순 레이블만 */
`;

export const A = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  font-style: italic;
  padding: 0;
  color: #111;
  &::placeholder { color: #9aa0a6; font-style: italic; }
`;

export const Actions = styled.div`
  padding: 12px 14px 16px;
`;
