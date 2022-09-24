import React, { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import type { Address } from "react-daum-postcode";
import SearchLocation from "../../components/SearchLocation";
import { SearchResultInterface } from "../../types/page";

const SearchLocationPage: React.FC = () => {
  const [isDone, setIsDone] = useState(false);
  const [searchResult, setSearchResult] = useState<SearchResultInterface>({
    zoneCode: "",
    roadAddress: "",
  });

  const handleComplete = (data: Address): void => {
    setSearchResult({
      zoneCode: data.zonecode,
      roadAddress: data.roadAddress,
    });
    setIsDone(true);
  };

  return (
    <>
      <DaumPostcodeEmbed onComplete={handleComplete} />
      {isDone && <SearchLocation searchResult={searchResult} />}
    </>
  );
};

export default SearchLocationPage;
