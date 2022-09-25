import React from "react";
import styled from "styled-components";
import type { ModalInterface } from "../../types/page";
import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #02204a;
  opacity: 0.7;
  transition: opacity 0.15s linear;
`;

const Modal = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  pointer-events: none;
  transform: none;
  transition: transform 0.3s ease-out;

  @media (min-width: 576px) {
    margin: 1.75rem auto;
    min-height: calc(100% - 3.5rem);
    max-width: 300px;
  }
`;

const ModalContent = styled.div`
  overflow: hidden;
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 0 solid transparent;
  border-radius: 0.2rem;
  outline: 0;
`;

const ModalFooter = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);

  & * {
    margin: 0.25rem;
  }
`;

const Button = styled.div`
  cursor: pointer;
  box-shadow: 0 2px 6px 0 rgb(10 207 151 / 50%);
  color: #fff;
  background-color: #0acf97;
  border-color: #0acf97;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.45rem 0.9rem;
  font-size: 0.9rem;
  line-height: 1.5;
  border-radius: 0.15rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  box-sizing: border-box;

  &:hover {
    background-color: #08ab7c;
    border-color: #089e74;
    text-decoration: none;
  }
`;

interface SearchLocationModalProps {
  modalInfo: ModalInterface;
  onClose: () => void;
}

const SearchLocationModal: React.FC<SearchLocationModalProps> = ({
  modalInfo,
  onClose,
}) => {
  const { possibleDelivery } = modalInfo;
  return (
    <>
      <BackDrop
        onClick={onClose}
        className="fade modal-backdrop show"
      ></BackDrop>
      <Modal className="modal">
        <ModalContent className="modal-content">
          <ModalHeader possibleDelivery={possibleDelivery} />
          <ModalBody possibleDelivery={possibleDelivery} />
          <ModalFooter className="modal-footer">
            <Button onClick={onClose}>확인</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchLocationModal;
