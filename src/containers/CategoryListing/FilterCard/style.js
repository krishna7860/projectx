import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 90%;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 18px;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0.75rem 1.5rem;
  font-size: 15px;
  font-weight: 500;
`;

export const Hr = styled.hr`
  color: #f2f4f8;
  width: 90%;
  margin: auto;
  border: 1px solid #f2f4f8;
`;

export const Span = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.6rem 0.75rem;
  font-size: 14px;
  text-align: right;
`;

export const Label = styled.label``;
