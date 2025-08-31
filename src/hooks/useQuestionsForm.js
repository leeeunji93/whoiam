import { useAtom } from "jotai";
import { useRef } from "react";
import { questionsAtom } from "@/store";

export default function useQuestionsForm(onSubmitSuccess) {
  const [items, setItems] = useAtom(questionsAtom);
  const inputsRef = useRef([]);

  const setAnswer = (idx, value) => {
    setItems(prev => prev.map((it, i) => (i === idx ? { ...it, a: value } : it)));
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const next = inputsRef.current[idx + 1];
      if (next) next.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitSuccess?.();
  };

  return { items, setAnswer, handleKeyDown, inputsRef, handleSubmit };
}
