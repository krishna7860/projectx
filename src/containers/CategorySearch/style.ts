import styled from "styled-components";
import { Modal } from "@material-ui/core";

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  outline: 0;
  align-items: center;
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 480px;
  overflow-y: auto;
  padding: 0.75rem 0rem;
  margin-top: 0.75rem;
`;

export const Body = styled.div`
  width: 50%;
  min-height: 450px;
  border-radius: 12px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: white;
  padding: 24px 48px;
  padding-bottom: 48px;
`;
