import { createContext, useContext, useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  updateOneReviewOptions,
  updateOneReviewOther,
  updateIntakeStatus,
} from "../redux/Intake/intake.actions";

// req.path.slice(0, -1);
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
  const [generatedText, setGeneratedText] = useState(undefined);
  const [error, setError] = useState(undefined);

  let formData = new Map();

  //sets the checkbox data to the redux store
  function setInputBox(itemID, key, tab, value) {
    if (formData.has(value)) {
      formData.delete(value);
    } else {
      formData.set(value, value);
    }
    updateOneReviewOptions(itemID, key, tab);
  }
  //sets the other text field data to the redux store
  function setOther(tab, value) {
    if (value === "") {
      return formData.delete("other");
    }
    formData.set("other", value);
    setOtherField(value);
    updateOneReviewOther(tab, value);
  }

  //generates the summary of the inputes on the page to the narrate field
  function generateSymptoms() {
    //check if there is any box checked
    if (formData.size > 0) {
      let generatedText = "===============Symptoms Include=============\n";
      console.log("Generating....");

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

  useEffect(() => {
    setTimeout(() => {
      setError(undefined);
    }, 4000);
    return () => {};
  }, [error]);

  return (
    <symptomContext.Provider
      value={{
        formData,
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
