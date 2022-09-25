import React, { useEffect, useRef, useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import type { Address } from "react-daum-postcode";
import SearchLocation from "../../components/SearchLocation";
import type { SearchResultInterface } from "../../types/page";

const SearchLocationPage: React.FC = () => {
  const [isDone, setIsDone] = useState(false);
  const [searchResult, setSearchResult] = useState<SearchResultInterface>({
    zoneCode: "",
    roadAddress: "",
  });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleComplete = (data: Address): void => {
    setSearchResult({
      zoneCode: data.zonecode,
      roadAddress: data.roadAddress,
    });
    setIsDone(true);
  };

  useEffect(() => {
    if (containerRef.current !== null) {
      const $div = containerRef.current.querySelector("div");
      if ($div !== null) {
        $div.style.height = "100vh";
      }
    }
  }, []);

  return (
    <div ref={containerRef}>
      <DaumPostcodeEmbed onComplete={handleComplete} />
      {isDone && <SearchLocation searchResult={searchResult} />}
    </div>
  );
};

export default SearchLocationPage;
