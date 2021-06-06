/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import Modal from "../../components/Modal/Modal";
import useGenericState from "../../Library/useGenericState";
import WelcomeGuide from "../WelcomeGuide/WelcomeGuide";

const Landing = (props: any): JSX.Element => {
  const { showWelcomeDialog } = props;

  return (
    <div>
      <HeroComponent />
      {showWelcomeDialog ? <WelcomeGuide /> : null}
      <Modal title="Search Category" />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  showWelcomeDialog: state.welcomeGuide.showWelcomeModal,
});

export default connect(mapStateToProps, {})(Landing);
