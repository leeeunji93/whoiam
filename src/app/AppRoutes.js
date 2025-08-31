import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {DesktopPage, IntroPage, QnaPage, ResultPage } from '@/pages';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* 1) Finder 느낌의 데스크톱 */}
        <Route path="/" element={<DesktopPage />} />
        {/* 2) 메인(정보 입력) */}
        <Route path="/intro" element={<IntroPage />} />
        {/* 3) 질문 입력 */}
        <Route path="/qna" element={<QnaPage />} />
        {/* 4) 결과 */}
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}
