import React from "react";
import MainBusiness from "../../components/MainBusiness";
import MainImages from "../../components/MainImages";
import MainIntroduce from "../../components/MainIntroduce";

const HomePage: React.FC = () => {
  return (
    <>
      <MainImages />
      <MainIntroduce />
      <MainBusiness />
    </>
  );
};

export default HomePage;
