import React from "react";
import MainBusiness from "../../components/MainBusiness";
import MainImages from "../../components/MainImages";
import MainIntroduce from "../../components/MainIntroduce";
import MainLink from "../../components/MainLink";
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
      <MainLink />
    </>
  );
};

export default HomePage;
