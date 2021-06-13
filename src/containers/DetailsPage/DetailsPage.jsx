import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import Header from "../../components/Header/Header";
import MostViewed from "../Landing/component/MostViewed/MostViewed";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import ReviewsCard from "../../components/ReviewsCard/ReviewsCard";
import {
  PageWrapper,
  InfoContainer,
  HeaderContainer,
  Title,
  Location,
  ReviewsContainer,
  Reviews,
  Ratings,
  OverviewTitle,
  OverviewDesc,
  HighlightsDesc,
  HighLightIcon,
  Wrapper,
  ReviewSection,
} from "./Style";
import data from "../../components/ImageGallery/data";

const DetailsPage = () => {
  const [state, setState] = useState({
    isOpen: false,
    index: 0,
  });
  return (
    <>
      {!state.isOpen && <Header isTransparent={false} />}
      <PageWrapper>
        <ImageGallery setState={setState} />
        <InfoContainer>
          <HeaderContainer>
            <Title>Leh Ladakh Bike Trip from Delhi</Title>
            <Location>Kerela</Location>
          </HeaderContainer>
          <ReviewsContainer>
            <Reviews>789 Reviews</Reviews>
            <Ratings>89</Ratings>
          </ReviewsContainer>
          <div>
            <OverviewTitle>Overview</OverviewTitle>
            <OverviewDesc>
              Have the experience of a lifetime, and get to ride your bikes on
              the most thrilling and adventurous routes of India. Ride your bike
              via beautiful valleys in Himachal, to the most thrilling routes of
              Ladakh. Starting from Delhi, this tour takes you to amazing
              destinations like Manali, Jispa, Sarchu, Leh, and many more. Drive
              through the highest motorable passes while enjoying the beauty of
              snow-capped mountains, lakes, amazing experiences, and much more.
              Ride all the way from Manali to Leh and experience the mix of the
              craziest adventures in the World!...
            </OverviewDesc>
          </div>
          <div>
            <OverviewTitle>Highlights</OverviewTitle>
            <Wrapper>
              <HighLightIcon color="#59A5FF" width="25px" height="25px" />
              <HighlightsDesc>
                A perfect blend of adventurous, thrilling and cultural
                experiences, handpicked by Thrillophilia’s outdoor experts
              </HighlightsDesc>
            </Wrapper>

            <Wrapper>
              <HighLightIcon color="#59A5FF" width="25px" height="25px" />
              <HighlightsDesc>
                A perfect blend of adventurous, thrilling and cultural
                experiences, handpicked by Thrillophilia’s outdoor experts A
                perfect blend of adventurous, thrilling and cultural
                experiences, handpicked by Thrillophilia’s outdoor experts
              </HighlightsDesc>
            </Wrapper>

            <Wrapper>
              <HighLightIcon color="#59A5FF" width="25px" height="25px" />
              <HighlightsDesc>
                A perfect blend of adventurous, thrilling and cultural
                experiences, handpicked by Thrillophilia’s outdoor experts
              </HighlightsDesc>
            </Wrapper>
          </div>
        </InfoContainer>
        <OverviewTitle>Similar Spots</OverviewTitle>
        <MostViewed padding={false} margin={false} />
        <OverviewTitle>Reviews</OverviewTitle>
        <ReviewSection>
          <ReviewsCard />
          <ReviewsCard />
          <ReviewsCard />
        </ReviewSection>
      </PageWrapper>
      {state.isOpen && (
        <Lightbox
          mainSrc={data[state.index]}
          nextSrc={data[(state.index + 1) % data.length]}
          prevSrc={data[(state.index + data.length - 1) % data.length]}
          onCloseRequest={() => setState({ isOpen: false, index: 0 })}
          onMovePrevRequest={() =>
            setState({
              ...state,
              index: (state.index + data.length - 1) % data.length,
            })
          }
          onMoveNextRequest={() =>
            setState({
              ...state,
              index: (state.index + 1) % data.length,
            })
          }
        />
      )}
    </>
  );
};

export default DetailsPage;
