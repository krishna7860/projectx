/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import VisibilityIcon from "@material-ui/icons/Visibility";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {
  Container,
  ImageContainer,
  DetailsContainer,
  Image,
  Title,
  CountContainer,
  CountView,
  HeaderTitle,
  SubTitle,
  WrapperContainer,
  HeaderContainer,
} from "./style";

export default function CategoryListingCard({ cardDetails }) {
  return (
    <WrapperContainer>
      <HeaderContainer>
        <div>
          <HeaderTitle>{cardDetails.title}</HeaderTitle>
          <SubTitle>{`${cardDetails.options} Star`}</SubTitle>
        </div>
        <FavoriteIcon style={{ color: "#FFC909", fontSize: "16px" }} />
      </HeaderContainer>
      <Container>
        <ImageContainer>
          <Image alt="no-img" src={cardDetails.img} />
        </ImageContainer>
        <DetailsContainer>
          <YouTubeIcon style={{ color: "#999FAA" }} />.
          <Title> One of the best hotels in Manali, We Provide you best </Title>
          <CountContainer>
            <VisibilityIcon style={{ color: "#999FAA", fontSize: "16px" }} />
            <CountView>12345</CountView>
          </CountContainer>
        </DetailsContainer>
      </Container>
    </WrapperContainer>
  );
}
