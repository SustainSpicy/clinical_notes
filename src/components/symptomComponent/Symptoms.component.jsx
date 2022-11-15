import React, { useState, useLayoutEffect, useRef, useMemo } from "react";
import {
  SectionHead,
  SymptomsWrapper,
  TextArea,
  SymptomListHeader,
  SymptomList,
} from "./Symptoms.styled";
import {
  updateOneReview,
  updateOneReviewOptions,
} from "../../redux/Intake/intake.actions";
import { connect } from "react-redux";
import useWindowDimensions from "../../hooks/useWindowDimention";
import SymptomHeader from "./symptomPanel/SymptomHeader.component";
import SymptomItem from "./symptomPanel/SymptomItem.component";
import { StyledPrimaryBtn } from "../styles/utils/input.styled";
import SyptomPanel from "./symptomPanel/SymptomPanel.component";
import { useSyptom } from "../../context/symptom.context";
import Checkbox from "../utils/CheckboxComponent/Checkbox.component";
import Divider from "@mui/material/Divider";

function Symptoms() {
  const [tab, setTab] = useState(0);
  //number of table to display on table,dafault to 3
  const [tabCollapse, setTabCollapse] = useState(3);
  //reference to the table header
  const TabHeadRef = useRef();
  //custom hooks to get the screen width
  const { windoWwidth } = useWindowDimensions();
  //import the context provider functions
  const {
    setInputBox,
    setOther,
    otherField,
    generateSymptoms,
    generatedText,
    setOtherField,
    allSymptom,
  } = useSyptom();

  //process the array data for the symptoms lists taken from the redux store
  const symptomTabData = useMemo(() => {
    let tempData = {
      listTitle: "Review List",
      inputRadius: "5px",
      responsive: true,
      tabData: [],
    };
    Object.entries(allSymptom).forEach(([key, value], index) => {
      tempData.tabData.push({
        id: index,
        title: key,
        arrayData: value,
        editable: true,
      });
    });

    return tempData;
  }, [allSymptom]);

  // calculate the width of the table and manage the number of tabs to display
  useLayoutEffect(() => {
    if (TabHeadRef.current) {
      let tabPanelWidth =
        TabHeadRef.current.childNodes[0].childNodes[0].clientWidth;
      let tabsHeader =
        TabHeadRef.current.childNodes[0].childNodes[0].childNodes;

      let totalTabsWidth = 0;
      let allowedIndex = 0;
      if (symptomTabData.responsive) {
        Object.entries(tabsHeader).forEach((item, index) => {
          totalTabsWidth += item[1].clientWidth;
          let remainder = tabPanelWidth - totalTabsWidth;
          if (remainder >= 200) {
            allowedIndex = index;
          }
        });
        setTabCollapse(allowedIndex);
      } else {
        allowedIndex = tabsHeader.length;
        setTabCollapse(allowedIndex);
      }
    }
  }, [TabHeadRef, windoWwidth, symptomTabData.responsive]);

  //maps the intake list item to its attributes
  function passProps(item) {
    return {
      id: `simple-tab-${item.id}`,
      label: `${item.title}(${item.arrayData.length})`,
      "aria-controls": `tabpanel-${item.id}`,
      style: { color: item.color },
    };
  }
  // updates the tab change of the table
  const handleTabChange = (e, newTab) => {
    e.preventDefault();
    setTab(newTab);
  };

  //handles the text filed "other" update to the context provider
  const handleTextAreaChange = (e) => {
    e.preventDefault();
    setOtherField(e.target.value);
    setOther("reviewofsystems", e.target.value);
  };

  return (
    <div>
      <SymptomsWrapper>
        <SymptomList
          value={tab}
          onChange={handleTabChange}
          aria-label={symptomTabData.listTitle}
          ref={TabHeadRef}
        >
          {symptomTabData.tabData.map((item, index, arr) => {
            let limit = tabCollapse;
            let continuation = limit + 1;
            if (index <= limit) {
              return <SymptomListHeader key={item.id} {...passProps(item)} />;
            } else if (index > continuation) {
              return (
                <SymptomListHeader
                  key={item.id}
                  {...passProps(item)}
                  position={"absolute"}
                />
              );
            } else if (index === continuation) {
              let metadata = {
                tabData: arr,
                continuation,
                passProps,
                handleTabChange,
              };

              return <SymptomHeader key={item.id} {...metadata} />;
            }
            return "";
          })}
        </SymptomList>
        {symptomTabData.tabData.map((item) => {
          return (
            <SyptomPanel key={item.id} value={tab} index={item.id}>
              {item.arrayData.length > 0 ? (
                item.arrayData.map((itemSelected) => {
                  return (
                    <SymptomItem
                      key={itemSelected.id}
                      id={itemSelected.id}
                      editable={item.editable}
                      {...itemSelected}
                      onClick={() => {
                        setInputBox(
                          itemSelected.id,
                          item.title,
                          "reviewofsystems",
                          itemSelected.title
                        );
                      }}
                    >
                      <Checkbox
                        type="checkbox"
                        checked={itemSelected.checked}
                        radius={symptomTabData.inputRadius}
                        text={itemSelected.title}
                      />
                    </SymptomItem>
                  );
                })
              ) : (
                <SymptomItem>No Data</SymptomItem>
              )}
            </SyptomPanel>
          );
        })}
      </SymptomsWrapper>
      <div>
        <SectionHead>
          <label>Other</label>
        </SectionHead>
        <TextArea
          name="other"
          value={otherField}
          onChange={handleTextAreaChange}
          placeholder={"More details..."}
        />
        <Divider />
      </div>
      <div>
        <SectionHead>
          <label>Narrative</label>
          <StyledPrimaryBtn onClick={() => generateSymptoms()}>
            Generate
          </StyledPrimaryBtn>
        </SectionHead>
        <TextArea
          value={generatedText}
          placeholder={"Generate Condition..."}
          readOnly
          height={"150px"}
        />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    intakes: state.intake.user.clinicalNotes,
    // options: state.intake.user.clinicalNotes.All.find(
    //   (item) => item.path === "reviewofsystems"
    // ).options,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateOneReview: (id) => dispatch(updateOneReview(id)),
    updateOneReviewOptions: (id, key, tab) =>
      dispatch(updateOneReviewOptions(id, key, tab)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Symptoms);
