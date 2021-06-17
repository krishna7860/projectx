import React, { useEffect } from "react";
import { connect } from "react-redux";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import MostViewed from "./component/MostViewed/MostViewed";
import { SectionTitle } from "./style";
import TestimonalSection from "./component/TestimonalSection/TestimonalSection";
import WelcomeGuide from "../WelcomeGuide/WelcomeGuide";

const Landing = (props: any): JSX.Element => {
  const { showWelcomeDialog } = props;

  useEffect(() => {
    if (showWelcomeDialog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "none";
    }
  }, [showWelcomeDialog]);

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

const mapStateToProps = (state: any) => ({
  showWelcomeDialog: state.welcomeGuide.showWelcomeModal,
});

export default connect(mapStateToProps, {})(Landing);
