import { createContext, useContext, useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  updateOneReviewOptions,
  updateOneReviewOther,
  updateIntakeStatus,
} from "../redux/Intake/intake.actions";

//  this supplies a specific screen with the necessary
//  data it needs and updates the redux store
const symptomContext = createContext();

function SymptomProvider({
  children,
  updateOneReviewOptions,
  updateOneReviewOther,
  updateIntakeStatus,
  options,
  other,
}) {
  const [allSymptom, setAllSymptom] = useState(options);
  const [otherField, setOtherField] = useState(other);
  const [generatedText, setGeneratedText] = useState();
  const [error, setError] = useState(false);
  let formData = new Map();

  //sets the checkbox data to the redux store
  function setInputBox(itemID, key, tab, value) {
    formData.set(value, value);
    updateOneReviewOptions(itemID, key, tab);
  }
  //sets the other text field data to the redux store
  function setOther(tab, value) {
    setOtherField(value);
    updateOneReviewOther(tab, value);
  }

  //generates the summary of the inputes on the page to the narrate field
  function generateSymptoms() {
    let generatedText = "===============Symptoms Include=============\n";
    console.log("Generating....");

    //check if there is any box checked
    if (formData.size > 0) {
      let form = options;
      Object.entries(form).forEach(([key, value], index) => {
        if (key !== "other" && value.length > 0) {
          generatedText += `- ${key}\n`;
          value.filter((item) => {
            if (item.checked) {
              generatedText += `\t- ${item.title}\n`;
            }
            return "";
          });
          generatedText += `\n`;
        }
      });
      if (other !== "") {
        generatedText += `\n Other symptoms includes:\n - ${other}`;
      }
      console.log("Generated");

      setGeneratedText(generatedText);

      // updatate the intake status to completed
      updateIntakeStatus("reviewofsystems");
    }
  }

  useEffect(() => {
    setAllSymptom(options);
    return () => {};
  }, [options]);

  return (
    <symptomContext.Provider
      value={{
        error,
        setError,
        allSymptom,
        setInputBox,
        setOther,
        otherField,
        setOtherField,
        generateSymptoms,
        generatedText,
      }}
    >
      {children}
    </symptomContext.Provider>
  );
}
const mapStateToProps = (state) => {
  return {
    options: state.intake.user.clinicalNotes.All.find(
      (item) => item.path === "reviewofsystems"
    ).options,
    other: state.intake.user.clinicalNotes.All.find(
      (item) => item.path === "reviewofsystems"
    ).other,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateOneReviewOther: (tab, value) =>
      dispatch(updateOneReviewOther(tab, value)),
    updateOneReviewOptions: (itemID, key, tab) =>
      dispatch(updateOneReviewOptions(itemID, key, tab)),
    updateIntakeStatus: (tab) => dispatch(updateIntakeStatus(tab)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SymptomProvider);

export const useSyptom = () => {
  return useContext(symptomContext);
};
