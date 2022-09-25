import React from "react";
import styled from "styled-components";

const ModalHeaderContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
`;

const H4 = styled.h4`
  margin: 10px 0;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.1;
`;

interface ModalHeaderProps {
  possibleDelivery: boolean;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ possibleDelivery }) => {
  return (
    <ModalHeaderContainer className="modal-header">
      {possibleDelivery ? <H4>배송가능</H4> : <H4>배송불가능</H4>}
    </ModalHeaderContainer>
  );
};

export default ModalHeader;
