import React, { useEffect, useMemo, useRef, useState } from "react";
import { useAtomValue } from "jotai";
import { toPng } from "html-to-image";
import { questionsAtom, userAtom } from "@/store";
import { PrimaryButton } from "@/components/Input";
import {
  Stage, Panel, Bar, CardWrap, Card, Strip, Stamp, Actions, Loading
} from "./styled";

/* 답 배치(좌표: %, 회전: deg) */
const layout5 = [
  { x: 26, y: 26, r: 0   },
  { x: 74, y: 30, r: -90 },
  { x: 70, y: 72, r: 0   },
  { x: 32, y: 70, r: 10  },
  { x: 50, y: 50, r: 90  },
];

export default function ResultPage() {
  const items = useAtomValue(questionsAtom);
  const user = useAtomValue(userAtom);
  const answers = useMemo(
    () => items.map(i => (i.a || "").trim()).filter(Boolean).slice(0, 5),
    [items]
  );

  const [loading, setLoading] = useState(true);
  const cardRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  const handleDownload = async () => {
    if (!cardRef.current) return;
    await document.fonts.ready;

    // 화면에 보이는 카드의 실제 렌더링 크기로 저장
    const rect = cardRef.current.getBoundingClientRect();
    const width = Math.round(rect.width);
    const height = Math.round(rect.height);

    const dataUrl = await toPng(cardRef.current, {
      cacheBust: true,
      width,
      height,
      backgroundColor: "#ffffff",
      pixelRatio: 2, // 선명도 향상 (iOS 메모리 고려해 과도하게 올리지 않기)
      style: { transform: "scale(1)", transformOrigin: "top left" }
    });

    const link = document.createElement("a");
    link.download = "whoiam-card.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <Stage>
      <Panel>
        <Bar>RESULT</Bar>

        {loading ? (
          <Loading>
            나를 찾아가는 중<span className="dots">
              <span> .</span><span> .</span><span> .</span>
            </span> 💾
          </Loading>
        ) : (
          <>
            <CardWrap>
              <Card ref={cardRef}>
                {answers.map((text, idx) => {
                  const { x, y, r } = layout5[idx] || { x: 50, y: 50, r: 0 };
                  return (
                    <Strip key={idx} $x={x} $y={y} $rotate={r}>
                      {text}
                    </Strip>
                  );
                })}
                <Stamp>
                  {(user?.name || "").trim() || "이름 미입력"} — {new Date().toLocaleDateString()}
                </Stamp>
              </Card>
            </CardWrap>

            <Actions>
              <PrimaryButton type="button" onClick={handleDownload}>
                이미지 저장 (PNG)
              </PrimaryButton>
            </Actions>
          </>
        )}
      </Panel>
    </Stage>
  );
}
