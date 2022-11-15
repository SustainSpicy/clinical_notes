import * as actionTypes from "./intake.types";

export const updateIntakeStatus = (tab) => {
  return {
    type: actionTypes.UPDATE_INTAKE_STATUS,
    payload: {
      tab,
    },
  };
};
export const updateOneReviewOptions = (itemID, key, tab) => {
  return {
    type: actionTypes.UPDATE_ONE_REVIEW_OPTIONS,
    payload: {
      itemID,
      key,
      tab,
    },
  };
};
export const updateOneReviewOther = (tab, value) => {
  return {
    type: actionTypes.UPDATE_ONE_REVIEW_OTHER,
    payload: {
      tab,
      value,
    },
  };
};
export const updateOneReview = (itemID) => {
  return {
    type: actionTypes.UPDATE_ONE_SYMPTOM,
    payload: {
      id: itemID,
    },
  };
};

export const loadOneNote = (itemID) => {
  return {
    type: actionTypes.LOAD_ONE_NOTE,
    payload: {
      id: itemID,
    },
  };
};
