const BASE_URL = process.env.REACT_APP_BASE_URL as string;

interface ResponseOkInterface {
  resultCode: string;
  resultMsg: string;
  result: {
    areaGroupLabel?: string;
    hubName?: string;
    delyverYn: string;
    delyverResult: string;
  };
}

export const postAbleDelivery = async (
  address: string
): Promise<ResponseOkInterface | undefined> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/delivery/searchDeliveryAreaForTest`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          addrBasic: address,
        }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error("API 통신 불안");
  } catch (error) {
    alert("API 통신 오류 발생!");
  }
};
