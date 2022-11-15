import React from "react";
import {
  ImageDiv,
  PatientInfoHeader,
  PatientInfoItem,
  PatientInfoWrapper,
  ProviderName,
  ProviderWrapper,
  StyledProviderBtn,
} from "./provider.styled";
import profile2 from "../../assets/images/profile2.jpg";
import { connect } from "react-redux";
import Divider from "@mui/material/Divider";
import { StyledTransparentBtn } from "../styles/utils/input.styled";
function Provider({ user, provider }) {
  return (
    <>
      <ProviderWrapper>
        <ImageDiv radius="50%" height={"150px"} width={"150px"}>
          <img src={profile2} alt="Provider img" />
        </ImageDiv>
        <ProviderName>{provider.name}</ProviderName>
        <StyledProviderBtn>Provider</StyledProviderBtn>
      </ProviderWrapper>
      <Divider />
      <PatientInfoWrapper>
        <PatientInfoHeader>Patient Information</PatientInfoHeader>
        <PatientInfoItem>
          <span>Patient</span>
          <span>{user.username}</span>
        </PatientInfoItem>
        <Divider />
        <PatientInfoItem>
          <span>DOB</span>
          <span>{user.dob}</span>
        </PatientInfoItem>
        <Divider />
        <PatientInfoItem>
          <span>Appointment Date</span>
          <span>{user.appointmentDate}</span>
        </PatientInfoItem>
        <Divider />
        <PatientInfoItem>
          <span>Appointment Duration</span>
          <span>{user.duration}</span>
        </PatientInfoItem>
        <Divider />
        <PatientInfoItem>
          <span>Start Time</span>
          <span>{user.start}</span>
        </PatientInfoItem>
        <Divider />
        <PatientInfoItem>
          <span>End Time</span>
          <span>{user.end}</span>
        </PatientInfoItem>

        <StyledTransparentBtn>History</StyledTransparentBtn>
      </PatientInfoWrapper>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.intake.user,
    provider: state.intake.provider,
  };
};

//this triggers the dispactch function when needed to update our store
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Provider);
