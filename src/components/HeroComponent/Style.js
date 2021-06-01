/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(
      180deg,
      rgba(4, 4, 4, 0.55) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    url(${(props) => props.bg_url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 300px 0px 0px 40px;
  justify-content: space-between;
  align-items: center;
`;

export const InfoWrapper = styled.div`
  width: 30%;
`;
export const Title = styled.h1`
  color: ${(props) => props.theme.colors.white};
`;

export const Info = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.white};
`;

export const Button = styled.div`
  width: 200px;
  color: ${(props) => props.theme.colors.white};
`;
