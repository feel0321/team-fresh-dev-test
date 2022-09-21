import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Empty from "./pages/EmptyPage";
import Header from "./components/Header";
import { emptyPageNames } from "./utils/constants";

const App: React.FC = () => {
  return (
    // TODO 테스트용 스타일 삭제
    <div className="App" style={{ background: "gray", height: "2000px" }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {emptyPageNames.map(({ title, path }, index) => (
          <Route key={index} path={path} element={<Empty title={title} />} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
