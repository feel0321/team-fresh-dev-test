import React from "react";
import MainBusiness from "../../components/MainBusiness";
import MainImages from "../../components/MainImages";
import MainIntroduce from "../../components/MainIntroduce";
import MainPoint from "../../components/MainPoint";
import MainService from "../../components/MainService";

const HomePage: React.FC = () => {
  return (
    <>
      <MainImages />
      <MainIntroduce />
      <MainBusiness />
      <MainService />
      <MainPoint />
    </>
  );
};

export default HomePage;
