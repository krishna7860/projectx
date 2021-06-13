/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { uuid } from "uuidv4";
import data from "./data";
import {
  Container,
  LeftImage,
  ImageItem,
  SubGrid,
  SubItem,
  SubItemImg,
} from "./Style";
// import ImageGalleryProps from "./ImageGallery.interface";

const ImageGallery = ({ setState }: any) => {
  return (
    <>
      <Container>
        <LeftImage>
          <ImageItem
            src={data[0]}
            alt="featured image"
            onClick={() => {
              setState({
                isOpen: true,
                index: 0,
              });
            }}
          />
        </LeftImage>
        <SubGrid>
          {data.slice(1).map((i, index) => {
            return (
              <SubItem>
                <SubItemImg
                  src={i}
                  alt="grid image"
                  key={uuid()}
                  onClick={() => {
                    setState({
                      isOpen: true,
                      index: index + 1,
                    });
                  }}
                />
              </SubItem>
            );
          })}
        </SubGrid>
      </Container>
    </>
  );
};

export default ImageGallery;
