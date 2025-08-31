// src/stores.js
import { atom } from "jotai";

export const userAtom = atom({
  name: "",
  ageBand: "",
  gender: "",
  bio: "",
});


export const questionsAtom = atom([
  { id: 1, q: "요즘 카메라 앱을 켜게 만드는 것", a: "" },
  { id: 2, q: "9월, 가장 많이 떠오르는 생각", a: "" },
  { id: 3, q: "지금 듣고 싶은 앨범", a: "" },
  { id: 4, q: "나를 부끄럽게(shame) 만드는 순간", a: "" },
  { id: 5, q: "지금 가고 싶은 식당", a: "" },
]);