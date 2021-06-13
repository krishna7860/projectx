import styled from "styled-components";
import { NavigateCircleOutline } from "react-ionicons";

export const PageWrapper = styled.div`
  padding: 130px 70px 0px 70px;
  margin: auto;
`;

export const InfoContainer = styled.section`
  padding: 30px 0px 0px 0px;
  max-width: 1600px;
  margin: auto;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  font-size: 28px;
  color: ${(props) => props.theme.colors.black};
  font-weight: 500;
`;

export const Location = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.colors.text_4};
`;

export const ReviewsContainer = styled.div`
  display: flex;
`;

export const Reviews = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.colors.text_4};
  margin-right: 20px;
`;

export const Ratings = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black};
`;

export const OverviewTitle = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 500;
  padding-left: 5px;
  color: ${(props) => props.theme.colors.black};
  border-left: 5px solid #6181f3;
`;

export const OverviewDesc = styled.div`
  font-size: 18px;
  width: 60%;
  color: ${(props) => props.theme.colors.black};
`;

export const HighlightsDesc = styled.div`
  font-size: 18px;
`;

export const HighLightIcon = styled(NavigateCircleOutline)`
  margin-right: 7px;
  /* margin-top: 3px; */
`;

export const Wrapper = styled.div`
  display: flex;
  /* align-items: flex-start; */
  margin: 10px 0px;
`;

export const ReviewSection = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
`;
