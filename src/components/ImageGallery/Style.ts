import styled from "styled-components";

export const Container = styled.div`
  min-height: 500px;
  margin-bottom: 30px;
  display: flex;
  flex-flow: row nowrap;
  height: 500px;
  max-width: 1400px;
`;

export const LeftImage = styled.div`
  flex: 1 1;
`;

export const ImageItem = styled.img`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  position: unset;
  top: 0;
  left: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const SubGrid = styled.div`
  flex: 0 0 39.5%;
  display: grid;
  grid-gap: 5px;
  margin-left: 5px;
`;
export const SubItem = styled.div`
  position: relative;
  &:nth-child(2) {
    grid-column: 2;
  }
`;

export const SubItemImg = styled.img`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  /* &:nth-child(3) {
    border-top-right-radius: 10px;
  } */
`;
