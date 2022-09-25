import React, { useCallback, useEffect, useRef, useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import type { Address } from "react-daum-postcode";
import SearchLocation from "../../components/SearchLocation";
import type { ModalInterface, SearchResultInterface } from "../../types/page";
import SearchLocationModal from "../../components/SearchLocationModal";
import { postAbleDelivery } from "../../api";

const SearchLocationPage: React.FC = () => {
  const [isDone, setIsDone] = useState(false);
  const [searchResult, setSearchResult] = useState<SearchResultInterface>({
    zoneCode: "",
    roadAddress: "",
  });
  const [modalInfo, setModalInfo] = useState<ModalInterface>({
    visible: false,
    possibleDelivery: false,
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
    setModalInfo({
      visible: true,
      possibleDelivery: possible,
    });
  };

  const handleCloseModal = useCallback(() => {
    setModalInfo((prevModalInfo) => ({ ...prevModalInfo, visible: false }));
  }, []);

  const handleSubmit = async (): Promise<void> => {
    const data = await postAbleDelivery(searchResult.roadAddress);
    if (data !== undefined) {
      const isOk = data.result.delyverResult === "배송가능";
      if (isOk) {
        handleOpenModal(true);
      } else {
        handleOpenModal(false);
      }
    }
  };

  useEffect(() => {
    if (containerRef.current !== null) {
      const $div = containerRef.current.querySelector("div");
      if ($div !== null) {
        $div.style.height = "100vh";
      }
    }
  }, []);

  useEffect(() => {
    if (searchResult.zoneCode !== "" && searchResult.roadAddress !== "") {
      handleSubmit();
    }
  }, [searchResult]);

  return (
    <div ref={containerRef}>
      <DaumPostcodeEmbed onComplete={handleComplete} />
      {isDone && (
        <>
          <SearchLocation searchResult={searchResult} onSubmit={handleSubmit} />
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
