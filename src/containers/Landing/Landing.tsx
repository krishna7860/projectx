import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import MostViewed from "./component/MostViewed/MostViewed";
import { SectionTitle } from "./style";
import TestimonalSection from "./component/TestimonalSection/TestimonalSection";
import WelcomeGuide from "../WelcomeGuide/WelcomeGuide";
import { RootState } from "../../redux/index.interface";

interface LandingProps {
  showWelcomeDialog: boolean;
}

const Landing: React.FC<LandingProps> = (props) => {
  const { showWelcomeDialog } = props;

  return (
    <>
      <HeroComponent />
      <SectionTitle>Most Viewed</SectionTitle>
      <MostViewed />
      <SectionTitle>Testimonals</SectionTitle>
      <TestimonalSection />
      {showWelcomeDialog ? <WelcomeGuide /> : null}
    </>
  );
};

Landing.propTypes = {
  showWelcomeDialog: PropTypes.bool.isRequired,
};

const mapStateToProps = (state: RootState) => ({
  showWelcomeDialog: state.welcomeGuide.showWelcomeModal,
});

export default connect(mapStateToProps, {})(Landing);
