import React, { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import type { Address } from "react-daum-postcode";
import SearchLocation from "../../components/SearchLocation";

const SearchLocationPage: React.FC = () => {
  const [isDone, setIsDone] = useState(false);

  const handleComplete = (data: Address): void => {
    console.log(data);
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    setIsDone(true);
  };

  return (
    <>
      <DaumPostcodeEmbed onComplete={handleComplete} />
      {isDone && <SearchLocation />}
    </>
  );
};

export default SearchLocationPage;
