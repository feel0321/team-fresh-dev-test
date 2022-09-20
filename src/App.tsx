import React from "react";
import HeaderComponent from "./components/Header";

const App: React.FC = () => {
  return (
    // TODO 테스트용 스타일 삭제
    <div className="App" style={{ background: "gray", height: "2000px" }}>
      <HeaderComponent />
    </div>
  );
};

export default App;
