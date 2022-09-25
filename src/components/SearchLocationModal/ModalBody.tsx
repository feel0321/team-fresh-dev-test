import React from "react";
import styled from "styled-components";

const ModalBodyContainer = styled.div`
  overflow-y: auto;
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
`;

const PopContent = styled.div`
  text-align: center !important;
`;

const Img = styled.img`
  border: 0;
  vertical-align: middle;
`;

const H1 = styled.h1`
  font-size: 22px;
  color: #404040;
  text-align: center;
  margin: 10px 0;
  font-weight: 700;
  line-height: 1.1;
`;

const P = styled.p`
  font-size: 15px;
  color: #606060;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 1rem;
`;

const PNotice = styled(P)`
  margin-top: 0;
  color: #e22020;
  font-size: 14px;
`;

interface ModalBodyProps {
  possibleDelivery: boolean;
}

const ModalBody: React.FC<ModalBodyProps> = ({ possibleDelivery }) => {
  return (
    <ModalBodyContainer className="modal-body">
      <PopContent className="pop-content">
        <Img
          src={
            possibleDelivery
              ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAABPCAYAAACqNJiGAAAABHNCSVQICAgIfAhkiAAACGdJREFUeF7tndt12zgQhn9QBaxTwSpSAatUsHQFsSuILe37OhXEqSDO+0qyK4hSQeAKYhcgRakg3gLE2TMgKPMCXkCCFJWNnnISEgQ/DgaDwY+JwAF/w8XpnwBOPEET1Y0AQyEw5D8SMBHACQFPAnhQf0fYwsNWXUqC/+5pO/1yf6hXEF0+eLj0TwaE10TwIXDGcJo+n+GCsBICcifweXspn5q2WfX+1uENl/7QA14LwhkAv2rHGlwnSWAVQIFUVtrWrzV4ClqAd0Lgoq3Ol7VLhNvAw/u2IDqHx0PTC/ChCjQi/MvDjSj0aQLY7rRPA/DAQ5DbA6B84iDAkBD6RCEw4eEvBH6rAPFGQ3Q6pJ3BU9CAv0G4KvJlRHiEgAwEbreXUkFr8hsu/YlHuEAI8o+8tpRvFLgJgI+u/KITeON//DPysCyAdg/C7c6DbGsIMTTtKs6EUP6VZ/LMT83eAS7Xf8lVk4+mR0qzJkZzn4folbGjhO8CuF7P5G2zp9jfPZ77FwRcC4Hfc/p2s5nJt/YtP99R2/JU2BFgySFHugPKlwFXh4CW7sto7vOHZYhZ30hY7Txc1h3GteCp4UH4JLQjjzrM0ACwc76p26EmlpB3r57EGOJVGiIBD4HAeR13Yg1PO+gvaf9GhO+BhzMXk0AbALVPnHgBpAHgUyBwatt3K3jsRyCwNAzTx8CD3ydrK7FCBpidmQmXNq6mMjy2uAHhq6FTd+upPFggXMdK9TLxBsCb9P07gVdVLbASPO3jvhqG6tvNTHInjvI3mvs8kbyLd55DmSAEWLq0K4WnnC2BfVyY+djPDnYm3le6JlekJxH2gYUrklJ447n/KR2OEOGoLc4QzmQskDM165k8L/rohfBGC/9G8JIr+Ts6H1fF6scLnwP5hA8k4ONmKo0LAG4zFx4vueDhU2KkEh43M5kcvlV6dgTX6FgwOwsHOM9byhnhaT/3LT5B6DhuUuYHjoBTbhc1wG08DtQTyEvTexvhpWchXjnoOK5xFqTvcNUiIBVIE+H9Ziav033PwMuxOuPNfQdRt38Z4wnDl4z1ZeClHae2uuHPPFzTkHOGb2bySMDjYHhA+PYzxnO2VsjZGCHwIX7fLrS+ffCcgGewuu+bmVRp7//jbzT3efKI5wMTYdoe3i+ry5qHafURt749PIOZ3q+nsoutQudGPVz6nOGRLhoeL3xuZ5/Sj6+u9vDSF8EyPeOioy7aiKyFtx03M3nZtM0io1LwdIrmR5FzbNqJLu5PDzMXAE3ubCfwgqMPBc/w0KNbhhUkahtb4GjuPySSp3pUhvBSi+KyBXEXVmTzjDxw3AbvEzfNchsSJGrWVfBGC/9HfB1rk021eck2rm0bnHZriSw6r3c3U/lC8Mw0IHyJXoxXFJuZbKxeagNUus0uwEXPHM39p3jCYCdwKgypp8/rqczsxXYBw+YZXYLTro0VBq/3fQxwLgwZlN4nAboGp1xbar+DMy2tw2PL3g2URsWJQukQ4HLhjRd+xhxdiGDiIVDVDZWyYXsocKZwDsCdSK8s2BG6WNpkYsdQ1lC6I5UH8JDg9IybmFgB3LcCLzdgrQnw0OCK4FH8a6+nsnQ7smx4mVLZ+1DIEmAfwJmWsErnN174zuFFgaVJVKOi/ooA+wIu+vBpVq3Bawqwb+DSyROlQWxrwoi+Vp0h3DdwnU4YaZ9oA7CP4IrgtRbnxSFWATgIcGbS/+l27ndCiSedBNtlk16FdfRd6ysMC4Bboc9YGF7s4PqYgyzPbIZwjjUcHFz+8iwr6Gk9q1I0hFMAewEuN6uSyefpRJ+tT7C9vgLA3oBTlmdIGIeZ5Gyir7Iu1xZaRR/YK3BpPXaUMD74HobBAnsFTltdWuT5vIdhyoBspvJVE6uyuTcGcNVHZf1o4bOY/VnUGd8968O+Le+PVlGg23wUF9eW7tvq2SQhKzhWxYALYPE2ShUDetJIS6rkeipPXXfm2NobL3zeWdxrdoxalV8qqexnrayS0kM3IacnYLuZypfHZi2u+jta+Cxqj+sTzfo8fuAv63vGbq0MNcU0RVJ6V1+4b+0YRe2GAy1mNXyA5FmEHCl9317aVX9yjlJkRO3VzmGEUnrrw7yuXqbLdkyHsSufw9C+j2ujVD4J0+XLtfmsnDMofIDHeJTC7uwZ8NDlsq1NUOm2c4/G2p49ixo2nXp0IVXtEkrVZ43m/jJdhahM5Fm6wZ3RsoRqy5//vC1QmhQuhZd7lPJI1fJpSzSe9K4oxS2FFwXPXgAWNScKu5DA1eZSfqw6NPp23WjpvxOExGlGfdaOj8Y2rzEQvXBedQtdZu3tobYE63yQokprNnrsSpYXddC1+qnOize9J3dW5YYtXZEVPD2EnVbFaQrD5v6CakS1DmNbw4v5QK7TmaiK00aNOhs4edcW1fbT5zRYiVDq49Lt14IXrUIGBE5hPSvEdesa4nUfJpPR0ueCiNc5tf0+7wQu6vrr2vCKAuno3zgfqOrnTeWdCwuyaWO88N+o+nk5Eo6yALjKsxrD44eoyo0CtwX1OzupIFulMq7S1REuXIjWncCLhrEXqAqOmRp18a/IqlAQZODhrmrBqyIr0NuWbyDgZ0o2xW5so7afM3ixeJBrT/FwSVcCyjBQul6CJE9XqyVsdxCh4xb0uK9WS0JNTAPQkHQFbxFgQiGw0qNePEQDgeu6vi3v4zmHF4PIxR44es+UWaviTxxdc7cLoVnPpFWe3xq8OEQvQGEF2SodtbjmngirwMOqLWhRX1qHF39pXaSV1Z8+kQJaWiC6DJouVL1iP7oLgXWmHO0UXhqEkrftcEIi1IHo/5Eg/F8JCBOGq+FEZZi26n8mUC4RD7sBnlycVir7QHn//h8dknjHpfCrBQAAAABJRU5ErkJggg=="
              : "data:image/png;base64,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"
          }
        />
        {possibleDelivery ? (
          <H1>배송 가능 지역입니다.</H1>
        ) : (
          <H1>배송 불가 지역입니다.</H1>
        )}
        <P>
          {possibleDelivery ? (
            "다음날 아침 7시 이전에 도착합니다."
          ) : (
            <>
              지번주소(구 주소)로 검색하셨다면
              <br />
              도로명 주소로 다시 시도해 주세요.
            </>
          )}
        </P>
        {possibleDelivery && (
          <PNotice>
            <small>
              (관공서/군사지역/학교/병원/시장/백화점/산업단지/도서산간지역 배송
              불가)
            </small>
          </PNotice>
        )}
      </PopContent>
    </ModalBodyContainer>
  );
};

export default ModalBody;
