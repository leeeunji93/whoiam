import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

/* 로딩 점프 */
const dots = keyframes`
  0% { opacity: .2; }
  50% { opacity: 1; }
  100% { opacity: .2; }
`;

export const Stage = styled.main`
  min-height: 100svh;
  padding: 12px;
  display: grid;
  place-items: center;
`;

export const Panel = styled.section`
  width: min(720px, 100%);
  border: 2px solid #111;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 10px 32px rgba(0,0,0,.18);
`;

export const Bar = styled.header`
  padding: 10px 14px;
  border-bottom: 2px solid #111;
  background: linear-gradient(#f9f9f9,#eee);
  font-weight: 700;
  text-align: center;
  font-family: "ChicagoFLF","Lucida Grande",Arial,sans-serif;
`;

/* 정사각 카드 캔버스 */
export const CardWrap = styled.div`
  padding: 14px;
  display: grid;
  place-items: center;
`;

export const Card = styled.div`
  position: relative;
  width: min(92vw, 640px);
  aspect-ratio: 1 / 1;                 /* 화면에선 반응형 정사각 */
  background:
    linear-gradient(#fafafa, #f2f2f2);
  border: 2px solid #111;
  overflow: hidden;
`;

/* 답 텍스트 조각 */
export const Strip = styled.div`
  position: absolute;
  max-width: 70%;
  padding: 8px 10px;
  background: #fff;
  border: 2px solid #111;
  box-shadow: 4px 4px 0 #111;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.15;
  transform: ${({ $rotate = 0 }) => `rotate(${$rotate}deg)`};
  left: ${({ $x = 0 }) => `${$x}%`};
  top: ${({ $y = 0 }) => `${$y}%`};
  translate: -50% -50%;
  text-align: center;
`;

/* 각종 라벨/스탬프 */
export const Stamp = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-family: "ChicagoFLF","Lucida Grande",Arial,sans-serif;
  font-size: 12px;
  letter-spacing: .6px;
  border: 1px dashed #111;
  padding: 6px 8px;
  background: #fff;
`;

/* 액션 영역 */
export const Actions = styled.div`
  padding: 12px 14px 16px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

/* 로딩 */
export const Loading = styled.div`
  padding: 48px 0;
  text-align: center;
  font-weight: 700;
  .dots span:nth-of-type(1){animation: ${dots} 1s infinite .0s;}
  .dots span:nth-of-type(2){animation: ${dots} 1s infinite .15s;}
  .dots span:nth-of-type(3){animation: ${dots} 1s infinite .3s;}
`;
