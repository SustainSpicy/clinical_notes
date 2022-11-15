import React, { useState, useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { GrView } from "react-icons/gr";
import { BsGear } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IconDiv } from "../styles/utils/icon";
import { Link } from "react-router-dom";
import { loadOneNote, updateOneNote } from "../../redux/Intake/intake.actions";
import IntakePanel from "./intakePanel/IntakePanel.component";
import IntakeItem from "./intakePanel/IntakeItem.component";
import Checkbox from "../utils/CheckboxComponent/Checkbox.component";
import {
  HeaderIcon,
  IntakeHeader,
  IntakeList,
  IntakeListHeader,
  IntakeNoteWrapper,
  IntakeViewBtn,
  ModalInner,
  ModalTilte,
} from "./Intake.styled";
import SimpleModal from "../utils/ModalComponent/ModalComponent";
import Tooltip from "@mui/material/Tooltip";

function Intake({ intakes, headerTitle, btnText }) {
  const [open, setOpen] = React.useState(false);
  const [allIntake, setAllIntake] = useState(intakes);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    setAllIntake(intakes);
    return () => {};
  }, [intakes]);

  //sets the completed list data of the table
  const completed = useMemo(() => {
    return allIntake.All.filter((item) => item.checked);
  }, [allIntake]);
  //sets the incomplete list data of the table
  const incomplete = useMemo(() => {
    return allIntake.All.filter((item) => !item.checked);
  }, [allIntake]);

  //process the array data for the intakes lists taken from the reux store
  const intakeTabData = useMemo(() => {
    let tempData = {
      listTitle: "Intake List",
      inputRadius: "50%",
      tabData: [],
    };
    Object.entries(allIntake).forEach(([key, value], index) => {
      tempData.tabData.push({
        id: index,
        title: key,
        arrayData: value,
      });
    });
    tempData.tabData.push({
      id: tempData.tabData.length,
      title: "Completed",
      arrayData: completed,
    });
    tempData.tabData.push({
      id: tempData.tabData.length,
      title: "Incomplete",
      color: "red",
      arrayData: incomplete,
    });

    return tempData;
  }, [allIntake]);

  //sets the tab index of the table
  const handleTabChange = (e, newTab) => {
    e.preventDefault();
    setTab(newTab);
  };

  //maps the intake list item to its attributes
  function passProps(item) {
    return {
      id: `simple-tab-${item.id}`,
      label: `${item.title}(${item.arrayData.length})`,
      "aria-controls": `tabpanel-${item.id}`,
      style: { color: item.color },
    };
  }

  const handleSettingsModalOpen = () => {
    setOpen(true);
  };

  const handleSettingsModalClose = (value) => {
    setOpen(false);
  };

  return (
    <IntakeNoteWrapper>
      <IntakeHeader>
        <h3>{headerTitle}</h3>
        <HeaderIcon>
          <Tooltip title="Search" placement="bottom">
            <IconDiv radius={"100%"}>
              <FiSearch />
            </IconDiv>
          </Tooltip>
          <Tooltip title="Setting" placement="bottom">
            <IconDiv radius={"100%"} onClick={handleSettingsModalOpen}>
              <BsGear />
            </IconDiv>
          </Tooltip>
        </HeaderIcon>
      </IntakeHeader>
      <IntakeViewBtn
        // onClick={() => loadOneNote(allIntake[0].id)}
        variant="contained"
        startIcon={<GrView size={"15px"} />}
      >
        {btnText}
      </IntakeViewBtn>
      <IntakeList
        value={tab}
        onChange={handleTabChange}
        aria-label={intakeTabData.listTitle}
      >
        {intakeTabData.tabData.map((item) => {
          return <IntakeListHeader key={item.id} {...passProps(item)} />;
        })}
      </IntakeList>
      {intakeTabData.tabData.map((item) => {
        return (
          <IntakePanel key={item.id} value={tab} index={item.id}>
            {item.arrayData.length > 0 ? (
              item.arrayData.map((itemSelected, index, arr) => {
                let url = itemSelected.path;

                return (
                  <Link key={itemSelected.id} to={`/${url}`}>
                    <IntakeItem>
                      <Checkbox
                        type="checkbox"
                        checked={itemSelected.checked}
                        radius={intakeTabData.inputRadius}
                        readOnly
                        text={itemSelected.title}
                      />
                    </IntakeItem>
                  </Link>
                );
              })
            ) : (
              <IntakeItem>No Data</IntakeItem>
            )}
          </IntakePanel>
        );
      })}
      <SimpleModal open={open} onClose={handleSettingsModalClose}>
        <ModalInner>
          <ModalTilte> Settings</ModalTilte>
          <Checkbox text={"Dark"} checked />
          <Checkbox text={"Light"} />
        </ModalInner>
      </SimpleModal>
    </IntakeNoteWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    intakes: state.intake.user.clinicalNotes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Intake);
