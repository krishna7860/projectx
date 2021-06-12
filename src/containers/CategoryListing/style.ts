import styled from "styled-components";
import banner from "../../assets/category_banner.png";

export const CategoryBanner = styled.div`
  width: 100vw;
  overflow: hidden;
  height: 550px;
  background-image: url(${banner});
  background-size: contain;
  background-attachment: fixed;

  @media only screen and (max-width: 620px) {
    /* For mobile phones: */
    height: 250px;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 2rem 12rem;

  @media only screen and (max-width: 760px) {
    /* For tablet phones: */
    padding: 2rem 1rem;
  }
  @media only screen and (max-width: 620px) {
    /* For mobile phones: */
    padding: 2rem 1rem;
  }
`;
export const CategorySeach = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0rem;
  position: sticky;
  position: -webkit-sticky;
  margin-top: 2rem;
  top: 0px; /* required */
  background: white;
`;

export const ScrollDiv = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const Header = styled.div`
  font-size: ${(props) => props.theme.fonts.header.size};
  font-weight: ${(props) => props.theme.fonts.header.weight};
  line-height: ${(props) => props.theme.fonts.header.lineHeight};
  margin: 0px;
`;

export const FilterContainer = styled.div`
  width: 20%;
  margin: 0px 1rem;
  @media only screen and (max-width: 620px) {
    /* For mobile phones: */
    width: 40%;
  }
`;

export const Tag = styled.span`
  display: flex;
  padding: 4px 8px;
  border-radius: 5px;
  border: 2px solid #e8eaee;
  font-size: 14px;
  align-items: center;
  justify-content: space-between;
  margin: 0px 0.25rem;
  cursor: pointer;
  width: fit-content;
  &.remove_all {
    background: #f2f4f8;
  }
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  grid-column-gap: 40px;
  height: 480px;
  justify-content: center;
  overflow-y: auto;
  padding: 0.75rem 0rem;
  margin-top: 0.75rem;
`;

export const ListingSection = styled.div`
  display: flex;
`;

export const FilterSection = styled.div`
  width: 45%;
`;

export const DisplaySection = styled.div`
  width: 55%;
  padding: 0rem 2rem;
`;

export const HeaderTitle = styled.p`
  font-size: 18px;
  margin: 0px;
  color: black;
  margin-top: 5rem;
`;
