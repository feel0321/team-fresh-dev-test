import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EmptyPage from "./pages/EmptyPage";
import { emptyPageNames } from "./utils/constants";
import SearchLocationPage from "./pages/SearchLocationPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/searchLocation" element={<SearchLocationPage />} />
        {emptyPageNames.map(({ title, path }, index) => (
          <Route
            key={index}
            path={path}
            element={<EmptyPage title={title} />}
          />
        ))}
      </Routes>
    </div>
  );
};

export default App;
