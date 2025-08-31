import React from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "@/components/Input";
import { useQuestionsForm } from "@/hooks";
import { Desk, Sheet, SheetHeader, GuideTape, Body, Item, Q, A, Actions } from "./styled";

export default function QnaPage() {
  const navigate = useNavigate();
  const { items, setAnswer, handleKeyDown, inputsRef, handleSubmit } =
    useQuestionsForm(() => navigate("/result"));

  return (
    <Desk>
      <Sheet>
        <SheetHeader>Who I am</SheetHeader>

        <GuideTape>
          1. 내가 누구인지 알아가는 여정입니다.<br />
          2. 각 질문에 대해 깊게 생각하는 것도 좋지만, 있는 그대로의 자신을 적어 보세요.<br />
          3. 한 줄 이내, 짧게는 단어로 간단히 써 보세요. 복잡하게 생각할수록 나를 알아가기 어려워요.
          (물론 길게 써도 무방하지만 이미지 카드에서는 짧게 보일 거예요.)
        </GuideTape>

        <Body>
          <form onSubmit={handleSubmit}>
            {items.map((it, idx) => (
              <Item key={it.id}>
                <Q>{idx + 1}. {it.q}</Q>
                <A
                  ref={el => (inputsRef.current[idx] = el)}
                  value={it.a}
                  onChange={(e) => setAnswer(idx, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  maxLength={120}
                />
              </Item>
            ))}

            <Actions>
              <PrimaryButton type="submit">보내기</PrimaryButton>
            </Actions>
          </form>
        </Body>
      </Sheet>
    </Desk>
  );
}
