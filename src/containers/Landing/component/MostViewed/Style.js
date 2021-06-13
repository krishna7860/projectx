/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: ${(props) => (props.padding ? "0px 30px" : "0px")};
  margin: ${(props) => (props.margin ? "0px 30px" : "0px")};
  .slick-list {
    height: auto !important;
    padding-left: 0% !important;
    .slick-slide img {
      /* border: 5px solid #fff; */
      display: block;
      margin: auto;
      max-width: 100% !important;
    }
  }
`;

export const Container = styled.div`
  width: 100% !important;
`;

export const InnerWrapper = styled.div`
  margin: 10px 30px;
`;
