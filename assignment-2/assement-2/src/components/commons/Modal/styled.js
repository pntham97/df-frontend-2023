import styled from "styled-components";
import { Modal as BaseModal } from "antd";

export const Modal = styled(BaseModal)`
  .ant-modal-content {
    border-radius: 8px;
    border-radius: ${({ $borderRadius }) => $borderRadius || "8px"};
  }

  .ant-modal-header {
    margin: 0px !important;
    background-color: #000000;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom: none;
  }
  .ant-modal-close {
    top: 24px;
    right: 27px;
  }

  .ant-modal-title {
    text-transform: capitalize;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.5px;
    color: #ffffff;
    font-style: bold;
    text-align: center;
    text-align: center;
  }

  svg {
    color: #9b9b9b;
  }

  .ant-modal-body {
    padding: 16px 24px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
  }

  &.editTitle {
    .ant-modal-body {
      height: 502px !important;
      overflow: auto;
    }
  }
`;

export const Footer = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 0 10px;
  justify-content: center;
`;
