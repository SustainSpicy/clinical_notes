import React from "react";
import { connect } from "react-redux";
import Intake from "../../components/intakeComponent/Intake.component";
import { Outlet } from "react-router-dom";
import {
  CenterColumn,
  LeftColumn,
  NoteWrapper,
  RightColumn,
} from "./Note.styled";
import Provider from "../../components/providerComponent/provider.component";

//  these are test data used inside the components,
//  separating them allows us to dynamically update them,
//  for language translation or per page view
//we can also store them in our context, redux store or a database
const pageTitleMetadata = {
  title: "Review of Systems",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eius ipsam exercitationem nam amet porro provident. Exercitationem possimus nihil deleniti earum explicabo officiis, aut tempore consectetur sunt. Eius, sit veniam!",
};
const intakeMetaData = {
  headerTitle: "Intake Note",
  btnText: "Preview Note",
};

function Note() {
  //temporarily to navigate directly to the review systems screen
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/reviewofsystems");
  //   return () => {};
  // }, [navigate]);

  return (
    <NoteWrapper>
      <LeftColumn>
        <Intake {...intakeMetaData} />
      </LeftColumn>
      <CenterColumn>
        {/* holds the dynamic mid-section of the page */}
        <Outlet context={{ ...pageTitleMetadata }} />
      </CenterColumn>
      <RightColumn>
        <Provider></Provider>
      </RightColumn>
    </NoteWrapper>
  );
}

//this gets the needed data from redux store and attaches it to the component
const mapStateToProps = (state) => {
  return {
    symptoms: state.intake,
  };
};

//this triggers the dispactch function when needed to update our store
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Note);
