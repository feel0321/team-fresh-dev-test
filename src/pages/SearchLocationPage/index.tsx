import React, { useCallback, useEffect, useRef, useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import type { Address } from "react-daum-postcode";
import SearchLocation from "../../components/SearchLocation";
import type { ModalInterface, SearchResultInterface } from "../../types/page";
import SearchLocationModal from "../../components/SearchLocationModal";

const SearchLocationPage: React.FC = () => {
  const [isDone, setIsDone] = useState(false);
  const [searchResult, setSearchResult] = useState<SearchResultInterface>({
    zoneCode: "",
    roadAddress: "",
  });
  const [modalInfo, setModalInfo] = useState<ModalInterface>({
    visible: true,
    possibleDelivery: true,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  const handleComplete = (data: Address): void => {
    setSearchResult({
      zoneCode: data.zonecode,
      roadAddress: data.roadAddress,
    });
    setIsDone(true);
  };

  const handleOpenModal = (possible: boolean): void => {
    setModalInfo((prevModalInfo) => ({
      visible: true,
      possibleDelivery: possible,
    }));
  };

  const handleCloseModal = useCallback(() => {
    setModalInfo((prevModalInfo) => ({ ...prevModalInfo, visible: false }));
  }, []);

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
      {isDone && (
        <>
          <SearchLocation
            searchResult={searchResult}
            onCompleteSearch={handleOpenModal}
          />
          {modalInfo.visible && (
            <SearchLocationModal
              modalInfo={modalInfo}
              onClose={handleCloseModal}
            />
          )}
        </>
      )}
    </div>
  );
};

export default SearchLocationPage;
